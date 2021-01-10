// Assets
import headerBg from "assets/header-background.svg";

// Styles
import './header.styles.scss';

export const Header = () => {
	return (
		<div className='header' style={{background: `#ffd6a8 url(${headerBg}) center no-repeat`}}>
			<span className='header__category'>Webinar</span>
			<h2 className='header__title'>El reto de humanizar el CX financiero en 2021.</h2>
			<h2 className='header__subtitle'>La experiencia de un Unicornio de Latam</h2>
			<p className='header__text'>Miércoles 16 de diciembre | 17 HS (horario de Quito)</p>
		</div>
	);
};
