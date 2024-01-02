import propTypes from "prop-types";

export const TransactionItems = ({ handleDeleteTransaction, transactions }) => {
	return (
		<table className='border-collapse border border-slate-400 bg-gradient-to-t from-slate-800 from-70% to-blue-900'>
			<thead className='border-slate-400'>
				<tr>
					<th className='hidden sm:table-cell'>ID</th>
					<th>Amount</th>
					<th>Category</th>
					<th>Date</th>
					<th>Income</th>
					<th>Description</th>
				</tr>
			</thead>
			{transactions.map((transaction) => (
				<tbody key={transaction.id} className=''>
					<Item handleDeleteTransaction={handleDeleteTransaction} {...transaction} />
				</tbody>
			))}
		</table>
	);
};

const Item = ({ handleDeleteTransaction, id, amount, category, date, is_income, description }) => {
	return (
		<tr key={id} className='border-t h-10 text-center'>
			<td className='w-10 hidden sm:table-cell'>{id}</td>
			<td className='w-10'>{amount}</td>
			<td className='w-32'>{category}</td>
			<td className='w-32'>{date}</td>
			<td className='w-32'>{is_income == true ? "Income" : "Outcome"}</td>
			<td className='w-52'>{description}</td>
			<td className='w-32'>
				<button
					className='border rounded-xl px-5 bg-red-800 hover:bg-red-500 hover:text-black hover:scale-105 hover:transition-transform'
					onClick={handleDeleteTransaction}
					id={id}>
					Delete
				</button>
			</td>
		</tr>
	);
};

TransactionItems.propTypes = {
	handleDeleteTransaction: propTypes.func.isRequired,
	transactions: propTypes.array.isRequired,
};

Item.propTypes = {
	handleDeleteTransaction: propTypes.func.isRequired,
	id: propTypes.number.isRequired,
	amount: propTypes.number.isRequired,
	category: propTypes.string.isRequired,
	date: propTypes.string.isRequired,
	is_income: propTypes.bool.isRequired,
	description: propTypes.string.isRequired,
};
