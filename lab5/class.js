export class Data {
    vaule(id) {
        this.id = id

        return document.getElementById(id).value
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

    userExists(uname1, uname2) {
        this.uname1 = uname1
        this.uname2 = uname2

        if(uname1 !== uname2) {
            return false
        } else {
            return true
        }
    }

    pwdMatch(pwd1, pwd2) {
        this.pwd1 = pwd1
        this.pwd2 = pwd2

        if(pwd1 !== pwd2) {
            return false
        } else {
            return true
        }
    }
}