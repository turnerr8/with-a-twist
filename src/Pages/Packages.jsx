import Header from '../Components/Header';
import Nav from '../Components/Nav';
import { Link } from 'react-router-dom';

export default function Packages() {
	return (
		<>
		<Header title='Packages' desc='We have an array of packages to choose from, whether you need full bar service or just a few extra hands.' />
			<Nav />
			<div className=' px-[7vw] py-12  mx-[10vw] my-16'>
				<h1 className='text-4xl'>Packages we offer:</h1>

				<div className='  grid md:grid-cols-3 py-8'>
					<div className='flex flex-col m-4 mb-8 rounded-xl bg-slate-100 p-6 '>
						<h3 className='PACKAGE-TITLE text-xl w-fit mb-4'>
							Basic Bar Service
						</h3>
						<ul className=' list-disc'>
							<li>Beer, wine, pre-mixed drink package (plus keg tap fees)</li>
							<li>Includes vintage trailer</li>
						</ul>
					</div>
					<div className='flex flex-col m-4 mb-8 rounded-xl bg-slate-100 p-6'>
						<h3 className=' PACKAGE-TITLE text-xl w-fit mb-4'>
							Full Bar Service
						</h3>
						<ul className=' list-disc'>
							<li>Beer, wine, cocktails</li>
							<li>Includes vintage trailer</li>
						</ul>
					</div>
					<div className='flex flex-col m-4 mb-8 rounded-xl bg-slate-100 p-6'>
						<h3 className='PACKAGE-TITLE text-xl w-fit mb-4'>
							Bartending Only
						</h3>
						<ul className=' list-disc'>
							<li>
								If you are looking for a more affordable option, and already
								have a bar at the venue, we are available for hire for on-site
								bartending.
							</li>
						</ul>
					</div>
				</div>
				<p className='text-xl'>For more information please <Link to='/contact' className=' text-neutral-600'>Contact Us</Link></p>
			</div>
		</>
	);
}
