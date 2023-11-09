import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<>
			<div className=' DESKTOP-NAV w-screen hidden lg:flex justify-around items-center  text-white  py-6 bg-[#181C11] text-xl z-50 cursive'>
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
			<div className='MOBILE-NAV  w-screen sticky top-0 h-[10vh] bg-[#181C11] text-white lg:hidden z-50 cursive '>
				<div className='flex justify-between items-center h-full px-6'>
					{openMenu ? (
						<div onClick={() => setOpenMenu(false)}>
							<svg
								className=' h-12 animate-pulse fill-gray-600'
								clipRule='evenodd'
								fillRule='evenodd'
								strokeLinejoin='round'
								strokeMiterlimit='2'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
							</svg>
						</div>
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
					} bg-[#181C11] border-t-2 border-neutral-800 items-center justify-center text-2xl py-6 `}
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
