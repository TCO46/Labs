import { Database } from "../OOP/database.js";

const db = new Database()
const signupBtn = document.getElementById('submit')

signupBtn.onclick = () => {
    const email = document.getElementById('email').value
    const pwd = document.getElementById('pwd').value
    const repwd = document.getElementById('repwd').value

    if(db.checkPass(pwd, repwd) == false) {
        alert("Please enter your password correctly")
    } else if(db.emptyInput(email, pwd, repwd) == false) {
        alert("Please fill in all the box")
    } else {
        db.signup(email, pwd)
    }

    localStorage.setItem("isLogin", false)
}