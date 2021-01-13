// Styles
import './socialList.styles.scss';

// Icons
import { IconContext } from 'react-icons';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';

export const SocialList = () => {
	return (
		<IconContext.Provider value={{ size: 24, color: 'white' }}>
			<ul className='social-media'>
				<li>
					<a className='social-media__link' href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
						<FaTwitter />
					</a>
				</li>

				<li>
					<a className='social-media__link' href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
						<FaFacebookF />
					</a>
				</li>

				<li>
					<a className='social-media__link' href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
						<FaLinkedinIn />
					</a>
				</li>

				<li>
					<a className='social-media__link' href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
						<FaYoutube />
					</a>
				</li>

				<li>
					<a className='social-media__link' href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
						<FaInstagram />
					</a>
				</li>

				<li>
					<a className='social-media__link' href='https://snapshat.com' target='_blank' rel='noopener noreferrer'>
						<FaSnapchatGhost />
					</a>
				</li>
			</ul>
		</IconContext.Provider>
	);
};
