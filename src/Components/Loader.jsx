export function Loader() {
	return (
		<div className=' LOADER-CONTAINER bg-[#181C11] columns-1 sm:columns-2  xl:columns-3 gap-[25px] px-12 py-12  overflow-clip'>
			<LoadingSquare />
			<LoadingSquare />
			<LoadingSquare />
			<LoadingSquare />
			<LoadingSquare />
			<LoadingSquare />
			<LoadingSquare />
			<LoadingSquare />
			<LoadingSquare />
		</div>
	);
}

function LoadingSquare() {
	return (
		<div className=' shimmer inline-block w-full aspect-[3/2] rounded-md  object-cover mb-[25px] bg-white'></div>
	);
}
