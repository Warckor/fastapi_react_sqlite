import propTypes from "prop-types";

export const TransactionItems = ({ id, amount, category, date, is_income, description }) => {
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

TransactionItems.propTypes = {
	id: propTypes.number.isRequired,
	amount: propTypes.number.isRequired,
	category: propTypes.string.isRequired,
	date: propTypes.string.isRequired,
	is_income: propTypes.bool.isRequired,
	description: propTypes.string.isRequired,
};
