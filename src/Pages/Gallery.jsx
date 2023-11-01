import Nav from '../Components/Nav';
import { getImages } from '../firebaseConfig';
import { useEffect, useState } from 'react';


export default function Gallery() {
	const [imageArray, setImageArray] = useState([]);
	useEffect(() => {
		getImages().then((imgs) => {
			setImageArray(imgs);
		});
	}, []);
	return (
		<>
			<Nav />
			<div className=' bg-[#181C11] flex flex-wrap px-12 py-12'>
				{imageArray.map((img) => {
					return (
						<div
							key={img.id}
							className=' max-w-2xl items-center justify-between w-1/3 h-auto p-4 flex '
						>
							<img src={img.imageURL} alt='image of trailer'></img>
						</div>
					);
				})}
			</div>
		</>
	);
}
