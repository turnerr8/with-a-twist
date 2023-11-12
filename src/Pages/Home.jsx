import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Components/Header';
const imgs = ['/trailer-cheers.jpg', '/IMG_2315.JPG', '/IMG_2331.JPG'];

export default function Home() {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<>
			<Header
				title='Home'
				desc='With a Twist is a mobile bar that offers exceptional service for exceptional events! Run by Kendra and Michael Buehn — two licensed, permitted, and insured bartenders — who had a bit too much time on their hands and decided to build a mobile bar. With a Twist is the perfect way to bring your wedding, birthday, reunion, or any other special event up to the next level.'
			/>
			<div className='w-screen md:h-screen h-[50vh] hero-bg fixed -z-30'></div>
			<div className='md:h-[90vh] h-[50vh]'></div>

			<div className='MOBILE-NAV  w-screen sticky top-0 h-[10vh] bg-[#181C11] text-white lg:hidden cursive  '>
				<div className='flex justify-between items-center h-full px-6'>
					{openMenu ? (
						<di onClick={() => setOpenMenu(false)}>x</di>
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
							<Link to='about'>About</Link>
						</li>
						<li>
							<Link to='contact'>Contact</Link>
						</li>
						<li>
							<Link to='gallery'>Gallery</Link>
						</li>
						<li>
							<Link to='packages'>Packages</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className=' DESKTOP-NAV w-screen hidden lg:flex justify-around items-center sticky top-0 h-[10vh] bg-[#181C11]  text-white text-xl cursive'>
				<Link to='about'>About</Link>
				<Link to='contact'>Contact</Link>
				<Link to='/' className='h-5/6'>
					<img
						src='/logo-vert-white.png'
						alt='with a twist vertical logo'
						className='h-full w-auto'
					/>
				</Link>
				<Link to='gallery'>Gallery</Link>
				<Link to='packages'>Packages</Link>
			</div>
			<div className='BODY bg-[#f1f4f6]'>
				<div className='  lg:mx-36 px-16 py-24  text-4xl text-center text-[#292716]'>
					Bringing you exceptional bartending,
					<br />
					<span className='cursive'>with a twist!</span>
				</div>

				<div className='GALLERY-SNEEK-PEEK grid grid-cols-2 md:grid-cols-4 w-full '>
					{imgs.map((img) => {
						return (
							<div
								className={`w-full h-[33vw] md:h-[25vw] bg-cover bg-center bg-no-repeat`}
								style={{ backgroundImage: `url(${img})` }}
								key={img}
							></div>
						);
					})}
					<Link
						to='/gallery'
						className=' group w-full h-[33vw] md:h-[25vw] flex items-center justify-center bg-[#c99770] p-4'
					>
						<div className=' text-xl md:text-2xl  lg:text-5xl text-[white] group-hover:scale-110 ease-in-out'>
							<span>
								View full
								<br /> gallery
							</span>
							<svg
								className=' fill-white inline-block h-[1em]'
								clipRule='evenodd'
								fillRule='evenodd'
								strokeLinejoin='round'
								strokeMiterlimit='2'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z'
									fillRule='nonzero'
								/>
							</svg>
						</div>
					</Link>
				</div>

				<div className='lg:mx-36 mt-16 pb-12 mx-8 px text-lg text-center  text-[#292716]'>
					<h3 className='text-3xl mb-6'>What we offer</h3>
					<p className='md:text-justify'>
						With a Twist is a mobile bar that offers exceptional service for
						exceptional events! Run by Kendra and Michael Buehn &mdash; two
						licensed, permitted, and insured bartenders &mdash; who had a bit
						too much time on their hands and decided to build a mobile bar. With
						a Twist is the perfect way to bring your wedding, birthday, reunion,
						or any other special event up to the next level.
					</p>
					<p className='mt-6 '>
						For basic package information visit our{' '}
						<Link className='underline' to='packages'>
							Packages
						</Link>{' '}
						page or{' '}
						<Link className=' underline' to='/contact'>
							Send us a message
						</Link>
						!{' '}
					</p>
				</div>
			</div>
		</>
	);
}
