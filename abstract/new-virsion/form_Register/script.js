let username = document.querySelector('.user_name');   
let password = document.querySelector('.password_input');  
let confirmPassword = document.querySelector('.confirm_password');  
let submitBtn = document.querySelector('.submit_btn');  

submitBtn.addEventListener('click', submitHandler);  

function submitHandler(event) {  
    event.preventDefault();  
    
    // check inputs is not empty  
    if (username.value === '' ||password.value === '' || confirmPassword.value === '') {  
        alert('Please fill in all fields.');  
    } else if (password.value !== confirmPassword.value) {  
        alert('Passwords do not match.');  
    } else {  
        // Save data to localStorage    
        localStorage.setItem('username', username.value);  
        localStorage.setItem('password', password.value);  
        alert('Registration successful!');  
        window.close()
        window.open('../index.html')
    }  
}