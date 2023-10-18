import { Link } from 'react-router-dom';
const imgs = [
	'/src/assets/img/trailer-cheers.jpg',
	'/src/assets/img/trailer-link.jpg',
	'src/assets/img/IMG_1167.jpeg',
];

export default function Home() {
	return (
		<>
			<div className='w-full h-screen hero-bg fixed -z-30'></div>
			<div className='h-[90vh]'></div>
			<div className=' w-screen flex justify-around items-center sticky top-0 h-[10vh] '>
				<Link to='/' className='h-5/6'>
					<img
						src='src/assets/logo-vert-white.png'
						alt='with a twist vertical logo'
						className='h-full w-auto'
					/>
				</Link>
				<Link to='about'>About</Link>
				<Link to='contact'>Contact</Link>
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
			</div>
		</>
	);
}
