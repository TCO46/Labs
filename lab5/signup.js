import { Data } from './class.js';
const get = new Data()
console.log(get)
var signupBtn = document.getElementById('signup');
// btn.onclick = get.vaule('username')
signupBtn.onclick = () => {
  console.log(get.vaule("username"))
  console.log(get.vaule("pwd"))
  console.log(get.vaule("repwd"))
  const uname = get.vaule("username")
  const pwd = get.vaule("pwd")
  const repwd = get.vaule("repwd")

  const checkPass = get.checkPass(pwd, repwd)
  const emptyInput = get.emptyInput(uname, pwd, repwd)
  if(checkPass == false) {
    alert("Please re-type your password again!")
  } else if(emptyInput == false) {
    alert("Make sure to fill in all fields!")
  } else {
    alert("Success")
    const accountObj = {
      username: uname,
      pwd: pwd,
      isLogin: false
    }
    localStorage.setItem("account", JSON.stringify(accountObj))

    location.href = "/lab5/index.html"
  }
}

