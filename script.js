const login = document.getElementById('signin')
const inpuserid = document.getElementById('userid')
const inppass = document.getElementById('password')
const investor = document.getElementById('investors')
const business = document.getElementById('businesses')
const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')
const option = document.querySelectorAll('input[type="radio"]')
const account = document.getElementById('account-check')
const navbutton = document.getElementById('navbutton')
const remail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const screenwidth = window.innerWidth

// USE A LISTENER TO navbutton TO REPLACE CONTENT OF account-check
navbutton.addEventListener('click', (e) => {
    e.replaceChild()
})

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

