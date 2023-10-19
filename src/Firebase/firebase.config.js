// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6w5C8H1dO59XoEtAZpV7WGEA5VLOhK_8",
  authDomain: "react-dragon-news-fireba-2e5e5.firebaseapp.com",
  projectId: "react-dragon-news-fireba-2e5e5",
  storageBucket: "react-dragon-news-fireba-2e5e5.appspot.com",
  messagingSenderId: "366647569098",
  appId: "1:366647569098:web:dc5a3cf55da187fd24e233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;