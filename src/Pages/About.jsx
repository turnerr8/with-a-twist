import Nav from '../Components/Nav';
export default function About() {
	return (
		<>
			<Nav></Nav>
			<div className='h-[50vh] flex'>
				<div className=' w-1/2 bg-[#5b5e4d] flex items-center justify-center h-full'>
					<h1 className=' text-4xl text-white'>Our Story</h1>
				</div>
				<div
					className='w-1/2 bg-cover bg-center bg-no-repeat h-full'
					style={{
						backgroundImage:
							'url("/467C2503-033E-47F3-A374-D0211A73C1A1.jpg")',
					}}
				></div>
			</div>
			<div className=' px-10 md:px-16 py-16 md:py-24'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corporis
					aliquid earum sit repellat aliquam, recusandae illum sint.
					Voluptatibus quibusdam aliquam voluptate ipsam minus autem asperiores
					ut quas deserunt minima!Lorem Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Minus doloremque officiis, corrupti itaque excepturi
					minima quisquam quia veritatis error perferendis nobis alias earum
					nisi dicta et soluta porro saepe. Unde? Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Officia dolorem iure impedit!
					Perspiciatis suscipit, autem accusamus atque dicta possimus quibusdam
					consectetur fugiat ab! Quibusdam, sapiente corrupti nulla voluptas
					nemo cupiditate.
				</p>
			</div>
		</>
	);
}
