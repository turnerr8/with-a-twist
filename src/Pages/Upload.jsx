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
				<div>
					<h1>Hello</h1>
					<input
						type='file'
						accept='image/*'
						onChange={handleUploadChange}
					></input>
					{image && (
						<>
							{image.map((curImage) => {
								return (
									<img
										src={URL.createObjectURL(curImage)}
										alt='selected image'
										className=' w-36'
										key={curImage.name}
									></img>
								);
							})}

							<button onClick={handleUploadHelper}>Upload</button>
						</>
					)}
				</div>
			)}
			{!user && (
				<div>
					<input
						type='text'
						placeholder='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<input
						type='password'
						placeholder='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></input>
					<button onClick={handleLogin}>Login</button>
				</div>
			)}
		</>
	);
}
