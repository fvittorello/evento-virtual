import { useState } from 'react';

// Styles
import './form.styles.scss';

export const Form = () => {
	const initialState = {
		name: '',
		lastname: '',
		email: '',
		country: '',
		phone: '',
		position: '',
	};

	const [formState, setFormState] = useState(initialState);
	const [errorState, setErrorState] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
		setErrorState({ ...errorState, [name]: '' });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		validateInputs();
		if (!name || !lastname || !email || !country || !phone || !position) {
			console.warn('Form has errors');
		} else {
			console.log(formState); // Send the form data to the DB
		}
	};

	const validateInputs = () => {
		let errorStack = {};
		for (const key in formState) {
			errorStack[key] = textValidation(formState[key]);
			if (textValidation(formState[key])) errorStack.hasErrors = true;
		}
		setErrorState(errorStack);
	};

	const textValidation = (inputValue) => {
		const trimSpaces = inputValue.trim().length;
		if (!trimSpaces) {
			return 'Completa este campo';
		}
		return null;
	};

	const { name, lastname, email, country, phone, position } = formState;

	return (
		<div className='form-container'>
			<h4 className='cta'>¡Inscríbete y reserva tu lugar ahora!</h4>

			<form className='form' action='' method='post' onSubmit={handleSubmit}>
				<label className='form__label' htmlFor='name'>
					Nombre
					<input className='form__input' type='text' name='name' value={name} onChange={handleChange} />
					{errorState.name ? <span className='form__error'>{errorState.name}</span> : null}
				</label>

				<label className='form__label' htmlFor='lastname'>
					Apellido
					<input className='form__input' type='text' name='lastname' value={lastname} onChange={handleChange} />
					{errorState.lastname ? <span className='form__error'>{errorState.lastname}</span> : null}
				</label>

				<label className='form__label' htmlFor='email'>
					Correo electrónico del trabajo
					<input className='form__input' type='email' name='email' value={email} onChange={handleChange} />
					{errorState.email ? <span className='form__error'>{errorState.email}</span> : null}
				</label>

				<label className='form__label'>
					País
					<select
						className={country ? 'form__select' : 'form__select form__select--unselected'}
						name='country'
						onChange={handleChange}>
						<option className='select-option--default' value=''>
							Seleccione país
						</option>
						<option className='select-option' value='argentina'>
							Argentina
						</option>
						<option className='select-option' value='bolivia'>
							Bolivia
						</option>
						<option className='select-option' value='brazil'>
							Brasil
						</option>
						<option className='select-option' value='chile'>
							Chile
						</option>
						<option className='select-option' value='ecuador'>
							Ecuador
						</option>
						<option className='select-option' value='venezuela'>
							Venezuela
						</option>
					</select>
					{errorState.country ? <span className='form__error'>{errorState.country}</span> : null}
				</label>

				<label className='form__label' htmlFor='phone'>
					Número de teléfono
					<input className='form__input' type='text' name='phone' value={phone} onChange={handleChange} />
					{errorState.phone ? <span className='form__error'>{errorState.phone}</span> : null}
				</label>

				<label className='form__label' htmlFor='position'>
					Puesto de trabajo
					<input className='form__input' type='text' name='position' value={position} onChange={handleChange} />
					{errorState.position ? <span className='form__error'>{errorState.position}</span> : null}
				</label>

				<button className='form__button' type='submit'>
					Inscríbete
				</button>
			</form>
		</div>
	);
};
