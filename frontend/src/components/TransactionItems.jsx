import propTypes from "prop-types";

export const TransactionItems = ({ transactions }) => {
	return (
		<table className='border-collapse border border-slate-400 bg-gradient-to-t from-slate-800 from-70% to-blue-900'>
			<thead className='border-slate-400'>
				<tr>
					<th>ID</th>
					<th>Amount</th>
					<th>Category</th>
					<th>Date</th>
					<th>Income</th>
					<th>Description</th>
				</tr>
			</thead>
			{transactions.map((transaction) => (
				<tbody key={transaction.id} className=''>
					<Item {...transaction} />
				</tbody>
			))}
		</table>
	);
};

const Item = ({ id, amount, category, date, is_income, description }) => {
	return (
		<tr key={id} className='border-t h-10 text-center'>
			<td className='w-10'>{id}</td>
			<td className='w-10'>{amount}</td>
			<td className='w-32'>{category}</td>
			<td className='w-32'>{date}</td>
			<td className='w-32'>{is_income == true ? "Income" : "Outcome"}</td>
			<td className='w-52'>{description}</td>
		</tr>
	);
};

TransactionItems.propTypes = {
	transactions: propTypes.array.isRequired,
};

Item.propTypes = {
	id: propTypes.number.isRequired,
	amount: propTypes.number.isRequired,
	category: propTypes.string.isRequired,
	date: propTypes.string.isRequired,
	is_income: propTypes.bool.isRequired,
	description: propTypes.string.isRequired,
};
