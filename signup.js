const register = document.getElementById('signup')
const usernameup = document.getElementById('usernameup')
const mailup = document.getElementById('usermailup')
const passup = document.getElementById('passwordup')
const investor = document.getElementById('investors')
const business = document.getElementById('businesses')
const error4 = document.getElementById('error4')
const error5 = document.getElementById('error5')
const error6 = document.getElementById('error6')
const error7 = document.getElementById('error7')
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

register.addEventListener('submit', (e) => {
    let msg4 = []
    let msg5 = []
    let msg6 = []
    let msg7 = []

    if ((usernameup.value.trim() === null) || (usernameup.value.trim() === '')) {
        msg4.push('Username is required')
    }

    if ((mailup.value.trim() === null) || (mailup.value.trim() === '')) {
        msg5.push('Email is required')
        passup.value = ''
    } else if (remail.test(mailup.value) === false) {
        msg5.push('Invalid email')
        passup.value = ''
    }

    if ((passup.value.trim() === null) || (passup.value.trim() === '')) {
        msg6.push('Password is required')
    } else if (passup.value.length < 8) {
        msg6.push('Password is not long enough')
    } else if (passup.value.length > 20) {
        msg6.push('Invalid password')
    }

    if (selected === null) {
        msg7.push('Select one option')
    }

    if ((msg4.length + msg5.length + msg6.length) != 0) {
        error4.innerHTML = msg4.join()
        error5.innerHTML = msg5.join()
        error6.innerHTML = msg6.join()
        error7.innerHTML = msg7.join()
        e.preventDefault()
    } else {
        if (investor.checked) {
            window.location.href = 'dashboard_investor.html'
        } else if (business.checked) {
            window.location.href = 'dashboard_business.html'
        }
    }
})