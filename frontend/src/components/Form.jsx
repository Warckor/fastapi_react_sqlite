import PropTypes from "prop-types";

export const Form = ({ handleInputChange, handleFormSubmit, date, amount, category, is_income, description }) => {
	return (
		<div className='pb-10'>
			<form
				className='flex flex-col justify-center items-start md:items-center sm:items-center gap-4 border-slate-100 border-solid border-2 p-5 mx-5 rounded-xl bg-gradient-to-t from-slate-800 from-70% to-blue-900 md:max-w-[700px] md:w-full sm:w-fit'
				onSubmit={handleFormSubmit}>
				<div className='flex gap-y-1 flex-col items-start w-96 sm:w-fit md:w-96'>
					<label className='font-semibold italic' htmlFor='date'>
						Date
					</label>
					<input
						className='rounded-xl border-2 border-slate-400 px-2 w-full'
						type='text'
						name='date'
						id='date'
						value={date}
						placeholder='YYYY-MM-DD'
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className='flex gap-y-1 flex-col items-start w-96 sm:w-fit md:w-96'>
					<label className='font-semibold italic' htmlFor='amount'>
						Amount
					</label>
					<input
						className='rounded-xl border-2 border-slate-400 px-2 w-full'
						name='amount'
						id='amount'
						type='text'
						value={amount}
						placeholder='0.00'
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className='flex gap-y-1 flex-col items-start w-96 sm:w-fit md:w-96'>
					<label className='font-semibold italic' htmlFor='category'>
						Category
					</label>
					<input
						className='rounded-xl border-2 border-slate-400 px-2 w-full'
						type='text'
						name='category'
						id='category'
						value={category}
						placeholder='Food'
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className='flex gap-y-1 flex-col items-start w-96 sm:w-fit md:w-96'>
					<label className='font-semibold italic' htmlFor='description'>
						Description
					</label>
					<input
						className='rounded-xl border-2 border-slate-400 px-2 w-full'
						type='text'
						name='description'
						id='description'
						placeholder='Groceries'
						value={description}
						onChange={handleInputChange}
					/>
				</div>
				<div className='flex flex-col gap-y-1 items-start w-96 sm:w-fit md:w-96'>
					<label className='font-semibold italic' htmlFor='is_income'>
						Is Income?
					</label>
					<input
						className='mx-1 px-2'
						type='checkbox'
						name='is_income'
						id='is_income'
						value={is_income}
						onChange={handleInputChange}
					/>
				</div>
				<button
					className='rounded-xl border-2 border-slate-400 px-2 w-96 bg-blue-800 hover:bg-blue-500 hover:transform hover:scale-105 hover:text-slate-800 mt-5'
					type='submit'>
					Create Transaction
				</button>
			</form>
		</div>
	);
};

Form.propTypes = {
	handleInputChange: PropTypes.func.isRequired,
	handleFormSubmit: PropTypes.func.isRequired,
	date: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	is_income: PropTypes.bool.isRequired,
	description: PropTypes.string.isRequired,
};
