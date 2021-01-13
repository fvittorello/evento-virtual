// Styles
import './speakers.styles.scss';

// Components
import { Speaker } from './Speaker';

export const Speakers = () => {
	return (
		<div className='speakers'>
			<Speaker first name='José Perez' position='Presidente' />
			<Speaker name='José Perez' position='Customer Service Sernior Manager' />
			<Speaker name='José Perez' position='Senior Customer Success Consultant' />
			<Speaker name='José Perez' position='Gerente de Consultoría de Soluciones' />
		</div>
	);
};
