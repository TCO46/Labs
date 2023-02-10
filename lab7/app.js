import { Database } from './class.js'

var base64 = ""

function imageToBase64() {
    var file = document.querySelector(
        'input[type=file]')['files'][0];    

    const reader = new FileReader();
    reader.onload = () => {
        base64 = reader.result;
    };
    reader.readAsDataURL(file);
}

const db = new Database()

var file = document.getElementById("image")
var submitBtn = document.getElementById("submit")

file.addEventListener('change', (e) => {
    if (file.files.length > 0) {
        const fileSize = file.files.item(0).size;
        const fileMb = fileSize / 1024 ** 2;
        if (fileMb*1.37 >= 1) {
            alert("Please select a file that less than 1MB")
            submitBtn.disabled = true;
        } else {
            imageToBase64()
            submitBtn.disabled = false;
        }
    }
})

submitBtn.onclick = async () => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("phoneNumber").value

    console.log(base64)

    db.addData(name, email, phoneNumber, base64)
    db.getData()
}
