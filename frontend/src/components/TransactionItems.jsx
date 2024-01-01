import propTypes from "prop-types";

export const TransactionItems = ({ transactions }) => {
	return (
		<table>
			<thead>
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
				<Item key={transaction.id} {...transaction} />
			))}
		</table>
	);
};

const Item = ({ id, amount, category, date, is_income, description }) => {
	return (
		<tbody key={id}>
			<tr>
				<td>{id}</td>
				<td>{amount}</td>
				<td>{category}</td>
				<td>{date}</td>
				<td>{is_income == true ? "Income" : "Outcome"}</td>
				<td>{description}</td>
			</tr>
		</tbody>
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
