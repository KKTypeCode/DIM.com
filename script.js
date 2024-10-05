var sidemenu = document.getElementById('sidebar')
const login = document.getElementById('signin')
const register = document.getElementById('signup')
const username = document.getElementById('username')
const inpuserid = document.getElementById('userid')
const inppass = document.getElementById('password')
const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')
const error4 = document.getElementById('error4')
const option = document.querySelectorAll('input[type="radio"][name="choice"]')
const remail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

let selected = null

option.forEach((radio) => {
    radio.addEventListener('click', (e) => {
        if (selected === e.target) {
            radio.checked = false
            selected = null
        } else {
            selected = e.target
        }
    })
})

login.addEventListener('submit', (e) => {
    let msg1 = []
    let msg2 = []
    let msg3 = []

    if (remail.test(inpuserid.value) === false) {
        inppass.value = ''
        if (inpuserid.value.trim() == null || inpuserid.value.trim() === '') {
            msg1.push('Username/Email is required')
        } else {
            msg1 = null
        }
    }  else if (remail.test(inpuserid.value) === true) {
        msg1 = null
    }

    if (inppass.value.trim() === null || inppass.value.trim() === '') {
        msg2.push('Password is required')
    } else if (inppass.value.length < 8) {
        msg2.push('Password is not long enough')
    } else if (inppass.value.length > 20) {
        msg2.push('Invalid password')
    }

    if (selected === null) {
        msg3.push('Select one option')
    }

    if ((msg1.length + msg2.length + msg3.length) === 0) {
        window.location.href('signup.html')
    } else {
        e.preventDefault()
        error1.innerHTML = msg1
        error2.innerHTML = msg2
        error3.innerHTML = msg3
    }
})

//warning for login page works when register.addEventListener is removed
//but doesn't work when register.addEventListener is present in code
//warning for register page still has not work

register.addEventListener('submit', (e) => {
    let msg4 = []
    let msg5 = []
    let msg6 = []
    let msg7 = []

    if (username.value.trim() == null || username.value.trim() === '') {
        msg4.push('Username is required')
    }

    if (remail.test(inpuserid.value) === false) {
        msg5.push('Email is required')
        inppass.value = ''
    }  else if (remail.test(inpuserid.value) === true) {
        msg5 = null
    }

    if (inppass.value.trim() == null || inppass.value.trim() === '') {
        msg6.push('Password is required')
    } else if (inppass.value.length < 8) {
        msg6.push('Password is not long enough')
    } else if (inppass.value.length > 20) {
        msg6.push('Invalid password')
    }

    if ((msg4.length + msg5.length + msg6.length + msg7.legnth) === 0) {
        console.log('entered')
    } else {
        e.preventDefault()
        error1.innerHTML = msg1
        error2.innerHTML = msg2
        error3.innerHTML = msg3
        error4.innerHTML = msg4
    }
})