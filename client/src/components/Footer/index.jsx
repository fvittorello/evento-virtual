// Styles
import './footer.styles.scss';

// Components
import { SocialList } from 'components/SocialList';

export const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__content'>
				<p className='footer__copyright'>&copy; 2020</p>
				<SocialList />
			</div>
			<hr className='bottom-line' />
		</div>
	);
};
