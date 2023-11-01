// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB6KLiKaTnMY7wqm49aNI0Ef_JZaqNcm3I',
	authDomain: 'withatwist-a2aa1.firebaseapp.com',
	projectId: 'withatwist-a2aa1',
	storageBucket: 'gs://withatwist-a2aa1.appspot.com',
	messagingSenderId: '669323512056',
	appId: '1:669323512056:web:014dd6f84add183b32d30d',
	measurementId: 'G-QJPSWBQF9K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

//TODO: convert files to .webp before uploading to database https://stackoverflow.com/questions/62209609/how-to-convert-any-image-to-webp

export const handleUpload = (files) => {
	if (files.length > 0) {
		files.map((file) => {
			const storageRef = ref(storage, `images/${file.name}`);
			uploadBytes(storageRef, file)
				.then((snapshot) => {
					console.log('success:' + snapshot);
					return true;
				})
				.catch((error) => {
					console.log(`error: ${error}`);
					return false;
				});
		});
	}
};
