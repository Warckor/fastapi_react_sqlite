export const handleCreateError = ({ data }) => {
	data.errors.forEach((error) => {
		let field = error.loc[1];
		let message = error.msg;
		const fieldElement = document.querySelector(`#${field}`);

		fieldElement.value = message.split(",")[0];
		vibration(fieldElement);
	});
};

function vibration(element) {
	element.classList.add("motion-safe:animate-ping");
	setTimeout(() => {
		element.classList.remove("motion-safe:animate-ping");
	}, 50);
}
