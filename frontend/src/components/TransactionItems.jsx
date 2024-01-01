import propTypes from "prop-types";

export const TransactionItems = ({ id, amount, category, date, is_income, description }) => {
	return (
		<table>
			<tr>
				<th>ID</th>
				<th>Amount</th>
				<th>Category</th>
				<th>Date</th>
				<th>Income</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>{id}</td>
				<td>{amount}</td>
				<td>{category}</td>
				<td>{date}</td>
				<td>{is_income == true ? "Income" : "Outcome"}</td>
				<td>{description}</td>
			</tr>
		</table>
	);
};

TransactionItems.propTypes = {
	id: propTypes.number.isRequired,
	amount: propTypes.number.isRequired,
	category: propTypes.string.isRequired,
	date: propTypes.string.isRequired,
	is_income: propTypes.bool.isRequired,
	description: propTypes.string.isRequired,
};
