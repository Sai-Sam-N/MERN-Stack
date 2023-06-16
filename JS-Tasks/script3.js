const form = document.getElementById('form');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const url = document.getElementById('url');
const msg = document.getElementById('msg');

// function checkRequired(inpArr){
//     inpArr.forEach(function(input) {
//         if (input.value === '') {
//             showError(input,'This field is required');
//         }
        
//     });
// }

function showError(input,message){
    const contField = input.parentElement;
    contField.className = 'form-container error';
    const contErrMsg = contField.querySelector('small');
    contErrMsg.innerText = message;
}

function showSuccess(input){
    const contField = input.parentElement;
    contField.className = 'form-container success';
}

function isValidEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(input);
}

function isValidUrl(input){
    const re = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    return re.test(input);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    if (Name.value.trim() === '') {
        showError(Name,'This field is required');
    } else {
        showSuccess(Name);
    }

    if ((email.value.trim() === '') || (!isValidEmail(email.value))) {
        showError(email,'A valid email address is required');
    } else {
        showSuccess(email);
    }

    if ((url.value.trim() === '') || (!isValidUrl(url.value))) {
        showError(url,'A valid url is required');
    } else {
        showSuccess(url);
    }

    if (msg.value.trim() === '') {
        showError(msg,'This field is required');
    } else {
        showSuccess(msg);
    }

    // checkRequired([Name,email,url,msg]);
    // console.log('submitted');
})



/*
form.addEventListener('submit', (e) => {
    let messages = [] // error messages
    if (Name.value === '' || Name.value == null) {
        messages.push('This field is required')
    }
    if (email.value == '' || email.value == null) {
        messages.push('A valid email address is required')
    }
    if (web.value == '' || web.value == null){
        messages.push('A valid url is required')
    }
    if (msg.value == '' || msg.value == null){
        messages.push('This field is required')
    }

    if (messages.length > 0){
        e.preventDefault() // cancel out the form from submitting
        errorElement.innerText = messages.join(', ')
    }
})
*/