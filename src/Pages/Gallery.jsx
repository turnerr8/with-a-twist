/* eslint-disable react/prop-types */

import Nav from '../Components/Nav';
import { getImages } from '../firebaseConfig';
import { useEffect, useState } from 'react';
import { Loader } from '../Components/Loader';
import Header from '../Components/Header';

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
			<Header
				title='Gallery'
				desc='Check out pictures of our vintage trailer and our past events.'
				keywords='gallery, images, With a Twist, bar, alcohol, beer, wine, wedding, event, '
			/>
			{!isLoaded && <Loader />}
			<Nav />
			<div className=' bg-[#181C11] columns-1 sm:columns-2  xl:columns-3 gap-[25px] px-12 py-12 space-y-[25px]'>
				{imageArray.map((img) => {
					return <Image img={img} key={img.id} />;
				})}
			</div>
		</>
	);
}

function Image({ img }) {
	const [isExpanded, setIsExpanded] = useState();

	const toggleModal = () => {
		if (isExpanded) {
			setIsExpanded(false);
		} else {
			setIsExpanded(true);
		}
	};

	return (
		<>
			{isExpanded && <Modal url={img.imageURL} toggleModal={toggleModal} />}
			<div
				key={img.id}
				className=' w-full auto object-cover transition-transform ease-in-out hover:scale-105 cursor-pointer  '
				onClick={toggleModal}
			>
				<img src={img.imageURL} alt='image of trailer'></img>
			</div>
		</>
	);
}

function Modal({ url, toggleModal }) {
	return (
		<div className=' MODAL !mt-0 w-screen h-screen bg-[#000000bc] z-50  fixed top-0 left-0 overflow-hidden flex items-center justify-center py-16 px-8 sm:px-24  '>
			<svg
				className=' fill-white h-12 absolute right-12 top-8 cursor-pointer hover:opacity-60'
				onClick={toggleModal}
				clipRule='evenodd'
				fillRule='evenodd'
				strokeLinejoin='round'
				strokeMiterlimit='2'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
			</svg>

			<img
				src={url}
				alt='with a twist image'
				className=' w-full h-full object-contain '
			/>
		</div>
	);
}
