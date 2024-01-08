import Nav from '../Components/Nav';
import Header from '../Components/Header';
export default function About() {
	return (
		<>
			<Header
				title='About'
				desc='
We are Kendra and Michael Buehn, owners and operators of With a Twist! We are both licensed bartenders, graduates of Central Washington University, and Kittitas County residents. Leading up to our own wedding, we spent 18 months renovating our 1959 Sportcraft Camper Trailer into a full-service mobile bar. Our combined experiences with event management and wedding planning have uniquely equipped us to be a key part of your day-of team to ensure that your event runs smoothly. Thank you for taking the time to visit our website, we look forward to hearing from you!'
			/>

			<Nav></Nav>
			<div className='h-[50vh] flex'>
				<div className=' w-1/2 bg-[#5b5e4d] flex items-center justify-center h-full'>
					<h1 className=' text-4xl text-white cursive text-center'>
						Our Story
					</h1>
				</div>
				<div
					className='w-1/2 bg-cover bg-center bg-no-repeat h-full'
					style={{
						backgroundImage: 'url("/467C2503-033E-47F3-A374-D0211A73C1A1.jpg")',
					}}
				></div>
			</div>
			<div className=' px-10 md:px-24 py-16 md:py-16 md:text-xl'>
				<p className=' first-letter:cursive first-letter:text-3xl'>
					We are Kendra and Michael Buehn, owners and operators of With a Twist!
					We are both licensed bartenders, graduates of Central Washington
					University, and Kittitas County residents. Leading up to our own
					wedding, we spent 18 months renovating our 1959 Sportcraft Camper
					Trailer into a full-service mobile bar. Our combined experiences with
					event management and wedding planning have uniquely equipped us to be
					a key part of your day-of team to ensure that your event runs
					smoothly. Thank you for taking the time to visit our website, we look
					forward to hearing from you!
				</p>
			</div>
		</>
	);
}
