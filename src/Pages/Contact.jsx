import Nav from '../Components/Nav';
import { useForm, ValidationError } from '@formspree/react';
//using FormSpree to handle form sending

export default function Contact() {
	const [state, handleSubmit] = useForm('xjvqzyye');
	if (state.succeeded) {
		return (
			<>
				<Nav />
				<div className='w-3/4 mx-auto my-24 rounded-2xl bg-[#181C11] text-white text-center px-2 py-20 lg:p-20'>
					<p
						className='text-3xl mb-6
				'
					>
						Thanks for your message, We will be in touch soon!
					</p>
					<p className='text-3xl opacity-80'>
						Meanwhile, follow us to stay up to date!
					</p>
					<div className='mt-8 mx-auto flex items-center justify-around w-1/2'>
						<a
							href='https://www.facebook.com/profile.php?id=61550728215314'
							target='_blank'
							rel='noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								className=' fill-white h-[3em]'
							>
								<path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' />
							</svg>
						</a>
						<a
							href='https://www.instagram.com/withatwistmobilebar/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className=' fill-white h-[3em]'
								viewBox='0 0 24 24'
							>
								<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
							</svg>
						</a>
					</div>
				</div>
			</>
		);
	}

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(inputs);
	// 	setInputs({});
	// };

	return (
		<>
			<Nav />

			<div className='flex flex-col items-center lg:flex-row'>
				<div className='lg:h-screen lg:w-1/2 px-4 py-8'>
					<div className=' flex flex-col items-center justify-center h-full'>
						<h1 className=' text-3xl font-bold'>Let&apos;s Get in Touch!</h1>
						<p className='text-center mb-6 mt-3 text-2xl opacity-80'>
							Fill out our form and we will be in touch soon.
						</p>
						<img
							src='/trailer-cheers.jpg'
							alt='Kendra and Michael Buehn Cheersing in front of mobile Bar'
							className=' w-4/5 hidden lg:block '
						/>
					</div>
				</div>
				<div className=' lg:w-1/2 p-8 max-w-4xl'>
					<form
						onSubmit={handleSubmit}
						className=' bg-[#c99770] rounded-xl flex items-center justify-around p-12 flex-wrap my-2'
					>
						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='name'>
								Name:
							</label>
							<input
								placeholder='John Smith'
								className=' contact-input'
								type='text'
								name='name'
								id='name'
							/>
							<ValidationError
								prefix='Name'
								field='name'
								errors={state.errors}
							/>
						</div>
						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='email'>
								Email:
							</label>

							<input
								placeholder='email@email.com'
								className='contact-input'
								type='email'
								name='email'
								id='email'
								required
							/>
							<ValidationError
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
						</div>
						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='phone'>
								Phone:
							</label>
							<input
								className='contact-input'
								placeholder='123-456-7890'
								type='tel'
								name='phone'
								id='phone'
							/>
							<ValidationError
								prefix='Phone'
								field='phone'
								errors={state.errors}
							/>
						</div>
						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='location'>
								Location:
							</label>
							<input
								placeholder='Ellensburg, WA'
								className='contact-input'
								type='text'
								name='location'
								id='location'
							/>
							<ValidationError
								prefix='Location'
								field='location'
								errors={state.errors}
							/>
						</div>
						<div className='flex flex-col m-3 w-[40%] grow'>
							<label className='contact-lable' htmlFor='date'>
								Date:
							</label>
							<input
								className='contact-input'
								type='text'
								name='date'
								id='date'
								placeholder='09/09/2023'
							/>
							<ValidationError
								prefix='Date'
								field='date'
								errors={state.errors}
							/>
						</div>

						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='amount'>
								# Of People:
							</label>
							<input
								className='contact-input'
								type='text'
								name='amount'
								id='amount'
								placeholder='50-100'
							/>
							<ValidationError
								prefix='Amount'
								field='amount'
								errors={state.errors}
							/>
						</div>
						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='type'>
								Event Type:
							</label>

							<input
								className='contact-input'
								type='text'
								name='type'
								id='type'
								placeholder='Wedding'
							/>
							<ValidationError
								prefix='Type'
								field='type'
								errors={state.errors}
							/>
						</div>
						<div className='flex flex-col m-3  grow !w-full'>
							<label className='contact-lable' htmlFor='desc'>
								Description:
							</label>
							<textarea
								className='contact-input '
								name='desc'
								id='desc'
								cols='30'
								rows='6'
								placeholder='Any other notes or information about the event that we should know..'
							></textarea>
							<ValidationError
								prefix='Desc'
								field='desc'
								errors={state.errors}
							/>
						</div>
						<input
							className='contact-input !grow-0 w-1/2 mt-5 bg-[#181C11] text-slate-100 focus:text-[#181C11] focus:bg-slate-100 cursor-pointer hover:text-slate-900 hover:bg-slate-100'
							type='submit'
							value='Send'
						/>
					</form>
				</div>
			</div>
		</>
	);
}
