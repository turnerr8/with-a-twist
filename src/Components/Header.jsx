/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet';

export default function Header({ title, desc }) {
	return (
		<Helmet>
			<title>{`With a Twist | ${title}`}</title>
			<meta name='description' content={desc} />
			<meta name='author' content='Ryan Turner' />
			<meta
				name='keywords'
				content='gallery, images, With a Twist, bar, alcohol, beer, wine, wedding, event, '
			/>
			<meta property='og:title' content={`With a Twist | ${title}`} />
			<meta property='og:description' content={desc} />
			<meta property='og:image' content='/trailer-hero.jpg' />
			<meta property='og:url' content='https://withatwistmobilebar.com/' />
		</Helmet>
	);
}
