import { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth, handleUpload } from '../firebaseConfig';

export default function Upload() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);
	const [image, setImage] = useState([]);
    const [uploadStatus, setUploadStatus] = useState(null)

	const handleUploadChange = (e) => {
		const file = e.target.files[0];
		setImage([...image, file]);
		console.log(image);
	};

    const handleUploadHelper = () => {
        handleUpload(image)
        .then((result)=>{
            setUploadStatus(result)
            console.log(uploadStatus)
        })

    }

	const handleLogin = async () => {
		console.log(`user: ${email}, password: ${password}`);
		try {
			const usercred = await signInWithEmailAndPassword(auth, email, password);
			setUser(usercred.user);
			console.log(user);
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
								console.log(curImage);
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
