import Nav from '../Components/Nav';
import { getImages } from '../firebaseConfig';
import { useEffect, useState } from 'react';
import { Loader } from '../Components/Loader';

export default function Gallery() {
	const [imageArray, setImageArray] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		getImages().then((imgs) => {
			setImageArray(imgs);
			setIsLoaded(true);
		});
	}, []);
	return (
		<>
			{!isLoaded && <Loader />}
			<Nav />
			<div className=' bg-[#181C11] grid md:grid-cols-gallery sm:grid-cols-gallery-md gap-[20px] px-12 py-12'>
				{imageArray.map((img) => {
					return (
						<div
							key={img.id}
							className=' w-full h-full object-cover transition-transform ease-in-out hover:scale-105 '
						>
							<img src={img.imageURL} alt='image of trailer'></img>
						</div>
					);
				})}
			</div>
		</>
	);
}
