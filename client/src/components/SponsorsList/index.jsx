// Assets
import asobancaLogo from 'assets/sponsors/asobanca.png';
import clusterFinancieroLogo from 'assets/sponsors/cluster-financiero.png';
import ebanxLogo from 'assets/sponsors/ebanx.png';
import hightelecomLogo from 'assets/sponsors/hightelecom.png';
import ipbfLogo from 'assets/sponsors/ipbf.jpg';
import zendeskLogo from 'assets/sponsors/zendesk.svg';

// Styles
import './sponsorsList.styles.scss';

export const SponsorsList = ({ bottom }) => {
	return (
		<ul className={bottom ? 'sponsors-container--bottom' : 'sponsors-container'}>
			<li className='sponsors-container__sponsor'>
				<img className='logo-clusterfinanciero' src={clusterFinancieroLogo} alt='Cluster Financiero logo' />
			</li>
			<li className='sponsors-container__sponsor'>
				<img className='logo-asobanca' src={asobancaLogo} alt='Asobanca logo' />
			</li>
			<li className='sponsors-container__sponsor'>
				<img className='logo-ibpf' src={ipbfLogo} alt='IPBF logo' />
			</li>
			<li className='sponsors-container__sponsor'>
				<img className='logo-hightelecom' src={hightelecomLogo} alt='High Telecom logo' />
			</li>
			<li className='sponsors-container__sponsor'>
				<img className='logo-ebanx' src={ebanxLogo} alt='Ebanx logo' />
			</li>
			<li className='sponsors-container__sponsor'>
				<img className='logo-zendesk' src={zendeskLogo} alt='Zendesk logo' />
			</li>
		</ul>
	);
};
