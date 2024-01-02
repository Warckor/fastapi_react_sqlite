/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { getTransactions, createTransaction, deleteTransaction } from "@components/Api.jsx";
import { Navbar } from "@components/Navbar.jsx";
import { Form } from "@components/Form.jsx";
import { TransactionItems } from "@components/TransactionItems.jsx";
import { Footer } from "@components/Footer";

function App() {
	const [transactions, setTransactions] = useState([]);
	const [formData, setFormData] = useState({
		amount: "",
		category: "",
		date: "",
		is_income: false,
		description: "",
	});

	useEffect(() => {
		if (!transactions) return;
		getTransactions().then((data) => {
			setTransactions(data);
		});
	}, []);

	const handleInputChange = (e) => {
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setFormData({
			...formData,
			[e.target.name]: value,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		createTransaction(formData).then((data) => {
			setTransactions([...transactions, data]);
			setFormData({
				amount: "",
				category: "",
				date: "",
				is_income: false,
				description: "",
			});
		});
	};

	const handleDeleteTransaction = (e) => {
		deleteTransaction(e.target.attributes.id.value).then(() => {
			getTransactions().then((data) => {
				setTransactions(data);
			});
		});
	};

	return (
		<main className='flex flex-col justify-between gap-y-5 bg-gradient-to-t from-slate-800 from-70% to-blue-900 min-h-screen'>
			<Navbar />
			<section className='flex flex-col xl:flex-row justify-around mt-10'>
				<Form handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} {...formData} />
				<article className='flex flex-col mt-2'>
					<TransactionItems handleDeleteTransaction={handleDeleteTransaction} transactions={transactions} />
				</article>
			</section>
			<Footer />
		</main>
	);
}

export default App;
