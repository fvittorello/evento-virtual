// Styles
import './speaker.styles.scss';

export const Speaker = ({ first, image, name, position }) => {
	return (
		<div className={first ? 'speaker first' : 'speaker'}>
			{image ? <img className='speaker__img' src={image} alt={name} /> : <span className='no-image' />}
			<div className='speaker__details'>
				<h3 className='speaker__name'>{name}</h3>
				<p className='speaker__position'>{position}</p>
			</div>
		</div>
	);
};
