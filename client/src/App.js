// Components
import { Header } from 'components/Header';
import { MainContent } from 'components/MainContent';
import { Footer } from 'components/Footer';
import { Modal } from 'components/Modal';

// Context
import { ModalProvider } from './context/ModalContext';

function App() {
	return (
		<div>
			<ModalProvider>
				<Modal />
				<Header />
				<MainContent />
				<Footer />
			</ModalProvider>
		</div>
	);
}

export default App;
