import { easeInOut, motion } from 'framer-motion';

const loadingContainerVariants = {
	start: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	end: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const loadingCircleVariants = {
	start: {
		y: '0%',
	},
	end: {
		y: '100%',
	},
};

const loadingCircleTransition = {
	duration: 0.7,
	ease: easeInOut,
	repeat: Infinity,
	repeatType: 'mirror',
};

export function Loader() {
	return (
		<div className=' fixed h-screen w-screen top-0 left-0 bg-white flex items-center justify-center'>
			<motion.div
				variants={loadingContainerVariants}
				className='flex justify-around  w-52 h-52 '
				initial='start'
				animate='end'
			>
				<motion.span
					variants={loadingCircleVariants}
					className='block w-12 h-12 rounded-full bg-black'
					transition={loadingCircleTransition}
				></motion.span>
				<motion.span
					variants={loadingCircleVariants}
					className='block w-12 h-12 rounded-full bg-black'
					transition={loadingCircleTransition}
				></motion.span>
				<motion.span
					variants={loadingCircleVariants}
					className='block w-12 h-12 rounded-full bg-black'
					transition={loadingCircleTransition}
				></motion.span>
			</motion.div>
		</div>
	);
}
