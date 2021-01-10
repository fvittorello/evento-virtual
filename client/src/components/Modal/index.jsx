import { useState } from 'react';

// Styles
import './modal.styles.scss';

export const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? 'modal-container display-block' : 'modal-container display-none';

	return (
		// <div className='modal-container'>
		<div className={showHideClassName}>
			<div className='modal'>
				<button type='button' className='modal__close-button' onClick={handleClose}>
					&#10005;
				</button>
				<div className='modal__content'>
					<h3 className='modal__title'>Obrigado pelo seu interesse.</h3>
					<p className='modal__description'>
						Entraremos em contato com você em breve no e-mail que você preencheu no formulário
					</p>
				</div>
			</div>
		</div>
	);
};
