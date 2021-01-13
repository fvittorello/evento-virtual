import { useModal, useModalUpdate } from 'context/ModalContext';

// Styles
import './modal.styles.scss';

export const Modal = () => {
	const rootElement = document.body;
	const modal = useModal();
	const toggleModal = useModalUpdate();

	if (modal) {
		window.scrollTo(0, 0);
		rootElement.classList.add('lock');
	} else {
		rootElement.classList.remove('lock');
	}

	return (
		<div className={modal ? 'modal-container' : 'hidden'} onClick={toggleModal}>
			<div className='modal' onClick={(e) => e.stopPropagation()}>
				<button type='button' className='modal__close-button' onClick={toggleModal}>
					&#10005;
				</button>
				<div className='modal__content'>
					<h3 className='modal__title'>Gracias por su interés.</h3>
					<p className='modal__description'>
						Estaremos en contacto con usted en breve a través del correo que ingresó en el formulario
					</p>
				</div>
			</div>
		</div>
	);
};
