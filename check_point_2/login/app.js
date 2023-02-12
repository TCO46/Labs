import { Database } from "../OOP/database.js";

const db = new Database()
const loginBtn = document.getElementById('submit')

loginBtn.onclick = () => {
    const email = document.getElementById("email").value
    const pwd = document.getElementById("pwd").value

    db.login(email, pwd)
    localStorage.setItem("isLogin", true)
    location.href = "/check_point_2/home"
} 