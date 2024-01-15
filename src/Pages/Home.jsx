import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Components/Header';
const imgs = ['/trailer_profile.jpg', '/IMG_2315.JPG', '/IMG_2331.JPG'];

export default function Home() {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<>
			<Header
				title='Home'
				desc='With a Twist Mobile Bar LLC is a mobile bartending company offering
						exceptional service for exceptional events! The bar is fully staffed
						with licensed and insured bartenders serving out of their trendy
						vintage camper trailer renovated to pour drinks in any setting. With
						a Twist is the perfect way to bring your wedding, birthday, reunion,
						or any other special event up to the next level. Located in
						Ellensburg Washington, we are able to travel to most locations in
						Washington.'
			/>
			<div className='w-screen md:h-screen h-[50vh] hero-bg fixed -z-30'></div>
			<div className='md:h-[90vh] h-[50vh]'></div>

			<div className='MOBILE-NAV  w-screen sticky top-0 h-[10vh] bg-[#181C11] text-white lg:hidden cursive text-5xl  '>
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
					} bg-[#181C11]  border-neutral-800 items-center justify-center  py-6 `}
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
			<div className=' DESKTOP-NAV w-screen hidden lg:flex justify-around items-center sticky top-0 h-[10vh] bg-[#181C11]  text-white text-5xl cursive'>
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
				<div className='  lg:mx-36 md:px-16 px-4 py-24  text-4xl text-center text-[#292716]'>
					<p>Bringing you exceptional bartending,</p>

					<p className='cursive text-6xl mt-6'>with a twist!</p>
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
						With a Twist Mobile Bar LLC is a mobile bartending company offering
						exceptional service for exceptional events! The bar is fully staffed
						with licensed and insured bartenders serving out of their trendy
						vintage camper trailer renovated to pour drinks in any setting. With
						a Twist is the perfect way to bring your wedding, birthday, reunion,
						or any other special event up to the next level. Located in
						Ellensburg Washington, we are able to travel to most locations in
						Washington.
					</p>
					<p className='mt-6 text md:text-xl '>
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
