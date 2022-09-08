// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRzzSycKpM64CI3x9AejujfMAIwq8ELhM",
  authDomain: "iad-socialmediaapp.firebaseapp.com",
  projectId: "iad-socialmediaapp",
  storageBucket: "iad-socialmediaapp.appspot.com",
  messagingSenderId: "125194561426",
  appId: "1:125194561426:web:b9b86929d3778f2575834b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const storageRef = ref(storage);
export const imagesRef = ref(storageRef, 'images');

// export const uploadTask = uploadBytesResumable(storageRef, file);

// // Register three observers:
// // 1. 'state_changed' observer, called any time the state changes
// // 2. Error observer, called on failure
// // 3. Completion observer, called on successful completion
// uploadTask.on('state_changed', 
//   (snapshot) => {
//     // Observe state change events such as progress, pause, and resume
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//     // Handle unsuccessful uploads
//     console.log("Can't upload that image! Retry...");
//   }, 
//   () => {
//     // Handle successful uploads on complete
//     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );





