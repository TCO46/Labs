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
const auth = getAuth()

export class Database {

    async signup(email, password) {
        this.username = email
        this.password = password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log("success")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    async login(email, password) {
        this.username = this.email
        this.password = this.password

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Success", user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    logout() {
        localStorage.isLogin = false
    }

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

    async getData(name) {
        this.name = name
        const querySnapshot = await getDocs(collection(db, name));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            var songs = doc.data()

            const node = document.createElement("li");
            const p = document.createTextNode(`${songs.name} | ${songs.artist}`)
            node.appendChild(p)
            document.getElementById("showSongsInfo").appendChild(node)
        });
    }

    checkPass(pwd1, pwd2) {
        this.pwd1 = pwd1
        this.pwd2 = pwd2

        if(pwd1 !== pwd2) {
            return false
        } else {
            return true
        }
    }

    emptyInput(uname, pwd, repwd) {
        this.uname = uname
        this.pwd = pwd
        this.repwd = repwd

        if(uname == "" || pwd == "" || repwd == "") {
            return false
        } else {
            return true
        }
    }
}