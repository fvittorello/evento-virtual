// Styles
import './socialList.styles.scss';

// Icons
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';

export const SocialList = () => {
	return (
		<ul className='social-media'>
			<li>
				<a className='social-media__link' href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
					<FaTwitter size={24} color='white' />
				</a>
			</li>

			<li>
				<a className='social-media__link' href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
					<FaFacebookF size={24} color='white' />
				</a>
			</li>

			<li>
				<a className='social-media__link' href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
					<FaLinkedinIn size={24} color='white' />
				</a>
			</li>

			<li>
				<a className='social-media__link' href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
					<FaYoutube size={24} color='white' />
				</a>
			</li>

			<li>
				<a className='social-media__link' href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
					<FaInstagram size={24} color='white' />
				</a>
			</li>

			<li>
				<a className='social-media__link' href='https://snapshat.com' target='_blank' rel='noopener noreferrer'>
					<FaSnapchatGhost size={24} color='white' />
				</a>
			</li>
		</ul>
	);
};
