const signup = document.getElementById("signup")
const login = document.getElementById("login")

signup.onclick = () => {
    if(localStorage.account != null) {
        alert("You already has a account!")
    } else {
        location.href = "/lab5/signup.html"
    }
}

login.onclick = () => {
    if(localStorage.account == null) {
        alert("You need to sign up first")
    } else {
        location.href = "/lab5/login.html"
    }
}

if(JSON.parse(localStorage.account).isLogin == true) {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("text").innerHTML = `Hello, ${JSON.parse(localStorage.account).username}`
}