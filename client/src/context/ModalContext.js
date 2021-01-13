import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();
const ModalUpdateContext = createContext();

export function useModal() {
	return useContext(ModalContext);
}

export function useModalUpdate() {
	return useContext(ModalUpdateContext);
}

export const ModalProvider = ({ children }) => {
	const [modalState, setModalState] = useState(false);

	function toggleModal() {
		setModalState((prevModalState) => !prevModalState);
	}

	return (
		<ModalContext.Provider value={modalState}>
			<ModalUpdateContext.Provider value={toggleModal} children={children} />
		</ModalContext.Provider>
	);
};
