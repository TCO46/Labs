import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDdWSgrJna_8FOgoOADX8_8I5V5DYjIBho",
    authDomain: "jsi15-48af6.firebaseapp.com",
    projectId: "jsi15-48af6",
    storageBucket: "jsi15-48af6.appspot.com",
    messagingSenderId: "1098679840260",
    appId: "1:1098679840260:web:737d6c9e08f89fb4ba0f51",
    measurementId: "G-LN15WTK14Z",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);


export class Database {
    async addData(name, email, phoneNumber, base64) {
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.base64 = base64
        
        const data = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            base64: base64 
        }   

        try {
            const docRef = await addDoc(collection(db, "usersInfo"), data);
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
        }
    }

    async getData() {
        const querySnapshot = await getDocs(collection(db, "usersInfo"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });

    }
}