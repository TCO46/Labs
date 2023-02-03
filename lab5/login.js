import { Data } from './class.js';
const get = new Data()
const loginBtn = document.getElementById("login")

loginBtn.onclick = () => {
    const uname = get.vaule("username")
    const pwd = get.vaule("pwd")
    const account = localStorage.account
    const unameStorage = JSON.parse(account).username
    const pwdStorage = JSON.parse(account).pwd

    if(localStorage.account == null) return 0

    const userExists = get.userExists(uname, unameStorage)
    const pwdMatch = get.pwdMatch(pwd, pwdStorage)
    if(userExists == false || pwdMatch == false) {
        alert("Wrong usernmame or password")
    } else {
        const parsedObject = JSON.parse(account)
        parsedObject.isLogin = true
        const modifiedndstrigifiedForStorage = JSON.stringify(parsedObject);
        localStorage.setItem("account", modifiedndstrigifiedForStorage);
        alert("Success")
        location.href = "/lab5/index.html"
    }
}