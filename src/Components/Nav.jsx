import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div className=' w-screen flex justify-around items-center sticky'>
			<Link to='/'>Home</Link>
			<Link to='about'>About</Link>
			<Link to='contact'>Contact</Link>
			<Link to='gallery'>Gallery</Link>
			<Link to='packages'>Packages</Link>
		</div>
	);
}
