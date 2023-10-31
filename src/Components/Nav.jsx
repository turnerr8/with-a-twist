import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div className=' w-screen flex justify-around items-center sticky top-0 text-white  py-6 bg-[#181C11] border-b-2'>
			<Link to='/about'>About</Link>
			<Link to='/contact'>Contact</Link>
			<Link to='/' className='h-5/6'>
				<img
					src='src/assets/logo-vert-white.png'
					alt='with a twist vertical logo'
					className=' h-[3em]'
				/>
			</Link>
			<Link to='/gallery'>Gallery</Link>
			<Link to='/packages'>Packages</Link>
		</div>
	);
}
