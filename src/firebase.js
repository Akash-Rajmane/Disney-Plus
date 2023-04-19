  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRY58ZFOq2nXGF9MgQgH1UprxxAamb3WI",
  authDomain: "streamy-67d54.firebaseapp.com",
  projectId: "streamy-67d54",
  storageBucket: "streamy-67d54.appspot.com",
  messagingSenderId: "207449467583",
  appId: "1:207449467583:web:30cbfa62145c1a87dcf40a",
  measurementId: "G-4TMFS6QY78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);


export {auth, provider,storage};
export default db;
