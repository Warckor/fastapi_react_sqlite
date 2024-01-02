export const getTransactions = async () => {
	const response = await fetch("http://localhost:8000/api/v1/transactions");
	const data = await response.json();
	return data;
};

export const createTransaction = async (transaction) => {
	const response = await fetch("http://localhost:8000/api/v1/transactions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(transaction),
	});
	const data = await response.json();
	return data;
};

export const deleteTransaction = async (id) => {
	const response = await fetch("http://localhost:8000/api/v1/transactions/" + parseInt(id), {
		method: "DELETE",
	});
	return response;
};
