import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiJxpqvVS3hc__jMSzKRXNrC5d4mkuO4o",
    authDomain: "dulzura-dorada.firebaseapp.com",
    projectId: "dulzura-dorada",
    storageBucket: "dulzura-dorada.appspot.com",
    messagingSenderId: "823445621886",
    appId: "1:823445621886:web:489777fd50c36f7607dc2f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;