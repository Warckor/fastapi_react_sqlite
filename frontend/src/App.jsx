import { useState, useEffect } from "react";
import { getTransactions, createTransaction } from "@components/Api.jsx";
import { Navbar } from "@components/Navbar.jsx";
import { Form } from "@components/Form.jsx";

// eslint-disable-next-line react/prop-types
const TransactionItems = ({ id, amount, category, date, is_income, description }) => {
	return (
		<article>
			<p>{id}</p>
			<p>{amount}</p>
			<p>{category}</p>
			<p>{date}</p>
			<p>{is_income}</p>
			<p>{description}</p>
		</article>
	);
};

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

	return (
		<main className='flex flex-col gap-y-5 bg-gray-200 min-h-screen'>
			<Navbar />
			<Form handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} {...formData} />
			{transactions.length <= 0 ? (
				<p>Loading...</p>
			) : (
				transactions.map((transaction) => <TransactionItems {...transaction} key={transaction.id} />)
			)}
		</main>
	);
}

export default App;
