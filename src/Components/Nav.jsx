import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<>
			<div className=' DESKTOP-NAV w-screen hidden lg:flex justify-around items-center  text-white  py-6 bg-[#181C11] z-50 cursive'>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
				<Link to='/' className='h-5/6'>
					<img
						src='/logo-vert-white.png'
						alt='with a twist vertical logo'
						className=' h-[3em]'
					/>
				</Link>
				<Link to='/gallery'>Gallery</Link>
				<Link to='/packages'>Packages</Link>
			</div>
			<div className='MOBILE-NAV  w-screen sticky top-0 h-[10vh] bg-[#181C11] text-white lg:hidden z-50 '>
				<div className='flex justify-between items-center h-full px-6'>
					{openMenu ? (
						<div onClick={() => setOpenMenu(false)}>x</div>
					) : (
						<div
							className='HAMBURGER-ICON space-y-2'
							onClick={() => setOpenMenu(true)}
						>
							<span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
							<span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
							<span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
						</div>
					)}

					<Link to='/' className='h-5/6  '>
						<img
							src='/logo-vert-white.png'
							alt='with a twist vertical logo'
							className='h-full w-auto  '
						/>
					</Link>
				</div>
				<div
					className={`MOBILE-NAV-SHOWN  ${
						openMenu ? 'flex' : 'hidden'
					} bg-[#181C11] border-t-2 border-neutral-800 items-center justify-center text-3xl py-6 `}
				>
					<ul className='space-y-4'>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
						<li>
							<Link to='/gallery'>Gallery</Link>
						</li>
						<li>
							<Link to='/packages'>Packages</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
