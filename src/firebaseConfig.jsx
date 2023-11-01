// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore, addDoc, getDocs } from 'firebase/firestore';

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

export const db = getFirestore(app);
const imagesCollection = collection(db, 'images');

export const handleUpload = async (files) => {
	files.map((file) => {
		const storageRef = ref(storage, `images/${file.name}`);
		uploadBytes(storageRef, file)
			.then((snapshot) => {
				console.log(`upload successful`);
				return getDownloadURL(snapshot.ref);
			})
			.then((downloadURL) => {
				const metaData = {
					name: file.name,
					description: 'With a Twist Mobile Bar in action',
					imageURL: downloadURL,
				};
				addDoc(imagesCollection, metaData)
					.then((docRef) => {
						console.log(
							`Image metadata added to firestore with id ${docRef.id}`
						);
					})
					.catch((err) => {
						console.error(`Error adding image metadata to firestore: ${err}`);
					});
				return true;
			})
			.catch((error) => {
				console.log(`error: ${error}`);
				return false;
			});
	});
};

//imagesCollection
export const getImages = async () => {
	try {
		const querySnapshot = await getDocs(imagesCollection);
		const data = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		console.log(data);
		return data;
	} catch (e) {
		console.error(`Error: ${e}`);
	}
};
