import { Database } from "../OOP/database.js";

const db = new Database()
const signupBtn = document.getElementById('signup')
const loginBtn = document.getElementById('login')

signupBtn.onclick = () => {
    location.href = "/check_point_2/signup"
}

loginBtn.onclick = () => {
    if(localStorage.isLogin == null) {
        alert("Please make a accout first")
    } else {
        location.href = "/check_point_2/login"
    }
}


if(localStorage.isLogin == 'true') {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "none";

    db.getData("mySongs")
    const div = document.getElementById("showSongsInfo")
    const logout = document.createElement("button")
    logout.innerHTML = "Logout"
    logout.id = "logout"
    div.appendChild(logout)
    
    logout.onclick = () => {
        db.logout()
        location.reload()
    }
}