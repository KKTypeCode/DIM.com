const login = document.getElementById('signin')
const register = document.getElementById('signup')
const inpuserid = document.getElementById('userid')
const investor = document.getElementById('investors')
const business = document.getElementById('businesses')
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
const option = document.querySelectorAll('input[type="radio"]')
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

    if ((msg1.length + msg2.length + msg3.length) != 0) {
        error1.innerHTML = msg1.join()
        error2.innerHTML = msg2.join()
        error3.innerHTML = msg3.join()
        e.preventDefault()
    } else {
        if (investor.value === true) {
            window.location.href('dashboard_investor.html')
        } else if (business.value === true) {
            window.location.href('dashboard_business.html')
        }
    }
})