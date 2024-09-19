var sidemenu = document.getElementById('sidebar')
const login = document.getElementById('signin')
const inpuserid = document.getElementById('userid')
const inppass = document.getElementById('password')
const error = document.getElementById('error')
var button = document.getElementById('enter')

"Sidebar"

"Login Form"
form.addEventListener('enter', (e) => {
    let msg = [] 
    if (inpuserid.value == null || inpuserid.value === '') {
        msg.push('Username/Email is required')
    } else if (inpuserid.length > 0) {
        e.preventDefault()
    }
    
    if (inppass.value == null || inppass.value === '') {
        msg.push('Password is required')
    } else if (inppass.length > 0) {
        e.preventDefault()
        error.innerText = msg.join(', ')
    }

    if (inppass.length < 8) {
        msg.push('Password is not long enough')
        e.preventDefault()
    }
})

"reminder" = "the warning message in the addEventListener doesnt work"
"missing_parts" = "for register/sign up page & sidemenu"
