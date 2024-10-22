// Components
import { Description } from 'components/Description';
import { Form } from 'components/Form';

// Styles
import './mainContent.styles.scss';

export const MainContent = () => {
	return (
		<div className='outside-container'>
			<div className='main-content'>
				<Description />
				<Form />
			</div>
		</div>
	);
};
