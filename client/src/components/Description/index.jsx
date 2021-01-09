// Components
import { SponsorsList } from 'components/SponsorsList';
import { Speakers } from 'components/Speakers';

// Styles
import './description.styles.scss';

export const Description = () => {
	return (
		<div className='description'>
			<SponsorsList />
			<p className='description__text'>
				Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y
				Seguros en el nuevo entorno digital.
			</p>

			<p className='description__text'>
				Además podremos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus
				clientes, mientras se convertía en el gran Unicornio de LATAM.
			</p>

			<p className='description__text'>Escucha de primera mano la voz de nuestros especialistas:</p>

			<Speakers />

			<p className='description__text'>
				Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de
				empresas del ámbito financiero en América Latina.
			</p>

			<p className='description__text'>¡Te esperamos!</p>
			<SponsorsList bottom />
		</div>
	);
};
