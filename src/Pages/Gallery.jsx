import Nav from '../Components/Nav';
import { getImages } from '../firebaseConfig';
import { useEffect, useState } from 'react';
const images = [
	'src/assets/img/IMG_1167.jpeg',
	'src/assets/img/IMG_2265.JPG',
	'src/assets/img/IMG_2279.JPG',
	'src/assets/img/IMG_2294.JPG',
	'src/assets/img/IMG_2303.JPG',
	'src/assets/img/IMG_2312.JPG',
	'src/assets/img/IMG_2315.JPG',
	'src/assets/img/IMG_2322.JPG',
];

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
