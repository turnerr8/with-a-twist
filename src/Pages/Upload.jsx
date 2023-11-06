import { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth, handleUpload } from '../firebaseConfig';

export default function Upload() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);
	const [image, setImage] = useState([]);
	//const [uploadStatus, setUploadStatus] = useState(null);

	const handleUploadChange = (e) => {
		const file = e.target.files[0];
		if (1 > file.size / 1024 / 1024) {
			setImage([...image, file]);
		} else {
			alert(
				`File is ${
					file.size / 1024 / 1024
				}Mibs. Please upload image below 1 MiB`
			);
		}
	};

	const handleUploadHelper = () => {
		if (image.length > 0) {
			handleUpload(image).then((result) => {
				setImage([]);
				//setUploadStatus(result);
				console.log(`result of file upload is ${result}`);
			});
		} else {
			alert('please select a file to upload');
		}
	};

	const handleLogin = async () => {
		try {
			const usercred = await signInWithEmailAndPassword(auth, email, password);
			setUser(usercred.user);
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<>
			{user && (
				<div className='mx-3 flex flex-col items-center justify-center my-20'>
					<input
						type='file'
						accept='image/*'
						onChange={handleUploadChange}
					></input>
					{image.length > 0 && (
						<>
							<button
								className='contact-input text-slate-800 hover:bg-slate-500 '
								onClick={handleUploadHelper}
							>
								Upload
							</button>

							<div className='flex flex-wrap my-4 p-4 mx-auto rounded-2xl bg-slate-300'>
								{image.map((curImage) => {
									return (
										<img
											src={URL.createObjectURL(curImage)}
											alt='selected image'
											className=' min-w-42 my-4 max-w-full md:max-w-[30vw] md:mx-6 grow'
											key={curImage.name}
										></img>
									);
								})}
							</div>
						</>
					)}
				</div>
			)}
			{!user && (
				<div className=' mx-3 md:mx-auto my-20 bg-slate-300 md:w-1/3 flex flex-col justify-center items-center py-14 rounded-xl'>
					<p>Please log in to upload photos</p>
					<input
						type='text'
						placeholder='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='contact-input bg-white my-4'
					></input>
					<input
						type='password'
						placeholder='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='contact-input bg-white my-4'
					></input>
					<button onClick={handleLogin} className='contact-input bg-white my-4'>
						Login
					</button>
				</div>
			)}
		</>
	);
}
