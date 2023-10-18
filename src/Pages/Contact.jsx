import Nav from '../Components/Nav';
import { useState } from 'react';

export default function Contact() {
	const [inputs, setInputs] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const val = e.target.value;
		setInputs((values) => ({ ...values, [name]: val }));
	};
	//using https://dashboard.emailjs.com/admin for email service

	return (
		<>
			<Nav />
			<div className='flex'>
				<div className='h-screen w-1/2 px-4 py-8'>
					<div className=' flex flex-col items-center justify-center h-full'>
						<h1 className=' text-2xl font-bold'>Lets Get in Touch!</h1>
						<p className='text-center'>
							Fill out our form and we will be in touch soon.
						</p>
					</div>
				</div>
				<div className=' w-1/2 p-8 max-w-4xl'>
					<form
						onSubmit={handleSubmit}
						className=' bg-slate-200 rounded-xl flex items-center justify-around p-12 flex-wrap my-2'
					>
						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='name'>
								Name:
							</label>
							<input
								value={inputs.name || ''}
								onChange={handleChange}
								placeholder='John Smith'
								className=' contact-input'
								type='text'
								name='name'
								id='name'
							/>
						</div>
						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='email'>
								Email:
							</label>

							<input
								value={inputs.email || ''}
								onChange={handleChange}
								placeholder='email@email.com'
								className='contact-input'
								type='email'
								name='email'
								id='email'
							/>
						</div>
						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='phone'>
								Phone:
							</label>
							<input
								value={inputs.phone || ''}
								onChange={handleChange}
								className='contact-input'
								placeholder='123-456-7890'
								type='tel'
								name='phone'
								id='phone'
							/>
						</div>
						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='location'>
								Location:
							</label>
							<input
								value={inputs.location || ''}
								onChange={handleChange}
								placeholder='Ellensburg, WA'
								className='contact-input'
								type='text'
								name='location'
								id='location'
							/>
						</div>
						<div className='flex flex-col m-3 w-[40%] grow'>
							<label className='contact-lable' htmlFor='date'>
								Date:
							</label>
							<input
								value={inputs.date || ''}
								onChange={handleChange}
								className='contact-input'
								type='text'
								name='date'
								id='date'
								placeholder='09/09/2023'
							/>
						</div>

						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='amount'>
								# Of People:
							</label>
							<input
								value={inputs.amount || ''}
								onChange={handleChange}
								className='contact-input'
								type='text'
								name='amount'
								id='amount'
								placeholder='50-100'
							/>
						</div>
						<div className='flex flex-col m-3  w-[40%] grow'>
							<label className='contact-lable' htmlFor='type'>
								Event Type:
							</label>

							<input
								value={inputs.type || ''}
								onChange={handleChange}
								className='contact-input'
								type='text'
								name='type'
								id='type'
								placeholder='Wedding'
							/>
						</div>
						<div className='flex flex-col m-3  grow !w-full'>
							<label className='contact-lable' htmlFor='desc'>
								Description:
							</label>
							<textarea
								value={inputs.desc || ''}
								onChange={handleChange}
								className='contact-input '
								name='desc'
								id='desc'
								cols='30'
								rows='6'
								placeholder='Any other notes or information about the event that we should know..'
							></textarea>
						</div>
						<input
							className='contact-input !grow-0 w-1/2 mt-5 bg-slate-900 text-slate-100'
							type='submit'
							value='Send'
						/>
					</form>
				</div>
			</div>
		</>
	);
}
