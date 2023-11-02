import { Link } from 'react-router-dom';
const imgs = [
	'/src/assets/img/trailer-cheers.jpg',
	'src/assets/img/IMG_2315.JPG',
	'src/assets/img/IMG_2331.JPG',
];

export default function Home() {
	return (
		<>
			<div className='w-screen h-screen hero-bg fixed -z-30'></div>
			<div className='h-[90vh]'></div>
			<div className=' w-screen flex justify-around items-center sticky top-0 h-[10vh] mb-9 '>
				<Link to='about'>About</Link>
				<Link to='contact'>Contact</Link>
				<Link to='/' className='h-5/6'>
					<img
						src='src/assets/logo-vert-white.png'
						alt='with a twist vertical logo'
						className='h-full w-auto'
					/>
				</Link>
				<Link to='gallery'>Gallery</Link>
				<Link to='packages'>Packages</Link>
			</div>
			<div className='bg-white px-36 py-12 text-center text-[#292716]'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem omnis
				reprehenderit iste nesciunt error nihil assumenda est asperiores
				aliquam. Error nam pariatur voluptas tenetur modi odit nulla eius ex
				velit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Consequatur ea vero voluptatum ipsa fugit nemo molestias odit beatae,
				minus ad expedita dolorum fugiat harum molestiae odio error atque quis
				nobis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
				maxime repellat cum debitis, aut enim nisi eius corporis eveniet sunt
				quae, eaque odio, ut a architecto quisquam quis dolore rerum.
			</div>

			<div className='flex flex-row flex-wrap w-full items-start justify-start'>
				{imgs.map((img) => {
					return (
						<div
							className={`w-1/4 h-[25vw] bg-cover bg-center bg-no-repeat`}
							style={{ backgroundImage: `url(${img})` }}
							key={img}
						></div>
					);
				})}
				<Link to='/gallery' className=' group w-1/4 h-[25vw] bg-cover bg-center bg-no-repeat flex items-center justify-center bg-[#B38364] p-4'>
					<div
						to='/gallery'
						className='  text-5xl text-white group-hover:scale-110 ease-in-out'
					>
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

			<div className='bg-white'>What we offer</div>
		</>
	);
}
