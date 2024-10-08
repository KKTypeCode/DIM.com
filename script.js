var sidemenu = document.getElementById('sidebar')
const login = document.getElementById('signin')
const register = document.getElementById('signup')
const inpuserid = document.getElementById('userid')
const inppass = document.getElementById('password')
const usernameup = document.getElementById('usernameup')
const mailup = document.getElementById('useridup')
const passup = document.getElementById('passwordup')
const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')
const error4 = document.getElementById('error4')
const error5 = document.getElementById('error5')
const error6 = document.getElementById('error6')
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
        if (inpuserid.value.trim() === null || inpuserid.value.trim() === '') {
            msg1.push('Username/Email is required')
        }
    }

    if (inppass.value.trim() === '') {
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
        console.log('Form submitted')
        login.onsubmit()
    } else {
        error1.innerHTML = msg1.join()
        error2.innerHTML = msg2.join()
        error3.innerHTML = msg3.join()
        e.preventDefault()
    }
})

register.addEventListener('submit', (e) => {
    let msg4 = []
    let msg5 = []
    let msg6 = []

    if (usernameup.value.trim() === null || usernameup.value.trim() === '') {
        msg4.push('Username is required')
    }

    if (mailup.vlaue.trim() === null || mailup.value.trim() === '') {
        msg5.push('Email is required')
        passup.value = ''
    } else if (remail.test(mailup.value) === false) {
        msg5.push('Invalid email')
        passup.value = ''
    }

    if (passup.vlaue.trim() === null || passup.value.trim() === '') {
        msg6.push('Password is required')
    } else if (passup.value.length < 8) {
        msg6.push('Password is not long enough')
    } else if (passup.value.length > 20) {
        msg6.push('Invalid password')
    }

    if ((msg4.length + msg5.length + msg6.length) === 0) {
        console.log('Form submitted')
        register.onsubmit()
    } else if ((msg1.length + msg2.length + msg3.length) >= 0) {
        error4.innerHTML = msg4.join()
        error5.innerHTML = msg5.join()
        error6.innerHTML = msg6.join()
        e.preventDefault()
    }
})
