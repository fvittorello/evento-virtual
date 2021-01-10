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

	const { name, lastname, email, country, phone, position } = formState;
	const {
		name: errorName,
		lastname: errorLastname,
		email: errorEmail,
		country: errorCountry,
		phone: errorPhone,
		position: errorPosition,
	} = errorState;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
		setErrorState({ ...errorState, [name]: '' });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		validateInputs();
		if (!name || !lastname || !email || !country || !phone || !position) {
			console.warn('Form has errors');
		} else {
			sendFormData(formState);
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

	const saveToLocalStorage = (data) => {
		const oldData = JSON.parse(localStorage.getItem('evento_virtual')) || [];
		oldData.push(data);
		localStorage.setItem('evento_virtual', JSON.stringify(oldData));
	};

	const sendFormData = (userData) => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		const jsonData = JSON.stringify(userData);

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: jsonData,
			redirect: 'follow',
		};

		let responseOk = true;

		fetch('http://localhost:5050/attendees', requestOptions)
			.then((response) => {
				if (response.status !== 201) {
					setErrorState({ ...errorState, email: 'El email ya se ingresó anteriormente' });
					responseOk = false;
				}
				return response.json();
			})
			.then((result) => {
				console.log(result.message);
				return responseOk;
			})
			.then((responseOK) => {
				if (responseOK) {
					saveToLocalStorage(userData);
					setFormState(initialState);
				}
				return;
			})
			.catch((error) => console.log('error', error));
	};

	return (
		<div className='form-container'>
			<h4 className='cta'>¡Inscríbete y reserva tu lugar ahora!</h4>

			<form className='form' action='' method='post' onSubmit={handleSubmit}>
				<label className='form__label' htmlFor='name'>
					Nombre
					<input className='form__input' type='text' name='name' value={name} onChange={handleChange} />
					{errorName ? <span className='form__error'>{errorName}</span> : null}
				</label>

				<label className='form__label' htmlFor='lastname'>
					Apellido
					<input className='form__input' type='text' name='lastname' value={lastname} onChange={handleChange} />
					{errorLastname ? <span className='form__error'>{errorLastname}</span> : null}
				</label>

				<label className='form__label' htmlFor='email'>
					Correo electrónico del trabajo
					<input className='form__input' type='email' name='email' value={email} onChange={handleChange} />
					{errorEmail ? <span className='form__error'>{errorEmail}</span> : null}
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
					{errorCountry ? <span className='form__error'>{errorCountry}</span> : null}
				</label>

				<label className='form__label' htmlFor='phone'>
					Número de teléfono
					<input className='form__input' type='text' name='phone' value={phone} onChange={handleChange} />
					{errorPhone ? <span className='form__error'>{errorPhone}</span> : null}
				</label>

				<label className='form__label' htmlFor='position'>
					Puesto de trabajo
					<input className='form__input' type='text' name='position' value={position} onChange={handleChange} />
					{errorPosition ? <span className='form__error'>{errorPosition}</span> : null}
				</label>

				<button className='form__button' type='submit'>
					Inscríbete
				</button>
			</form>
		</div>
	);
};
