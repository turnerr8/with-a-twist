import Nav from '../Components/Nav';
import Header from '../Components/Header';
export default function About() {
	return (
		<>
			<Header title='About' desc="Hello we are Kendra and Michael Buehn! We are both CWU grads and now Ellensburg locals. What started as a fun idea, soon turned into one our first projects as an engaged couple. We've spent the last year and a half tearing this trailer down to its bones and building it back up into our modern vision. Our combined experiences with event planning and weddings uniquely equip us to be a key part of your day-of team and ensure that your event runs smoothly. Thank you for taking the time to visit our website, we look forward to hearing you! With A Twist's first official event this summer was our wedding!" />

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
			<div className=' px-10 md:px-24 py-16 md:py-16 md:text-lg'>
				<p>
					Hello we are Kendra and Michael Buehn! We are both CWU grads and now
					Ellensburg locals. What started as a fun idea, soon turned into one
					our first projects as an engaged couple. We&apos;ve spent the last
					year and a half tearing this trailer down to its bones and building it
					back up into our modern vision. Our combined experiences with event
					planning and weddings uniquely equip us to be a key part of your
					day-of team and ensure that your event runs smoothly. Thank you for
					taking the time to visit our website, we look forward to hearing you!
					With A Twist&apos;s first official event this summer was our wedding!
				</p>
			</div>
		</>
	);
}
