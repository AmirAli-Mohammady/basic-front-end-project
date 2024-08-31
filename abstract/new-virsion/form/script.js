let username = document.querySelector('.user_name');  
let password = document.querySelector('.password_input');  
let submitBtn = document.getElementsByClassName('submit_btn')[0];  

submitBtn.addEventListener('click', signinHandler);  

function signinHandler(event) {  
    event.preventDefault(); 
    // console.log(username.value);
    let usernameCheck= localStorage.getItem('username')
    // console.log(usernameCheck);
    let passwordCheck = localStorage.getItem('password')
    //check inputs  
    if (username.value === '') {  
        alert('please fill the username input');  
    }   
    else if(password.value === ''){  
        alert('please fill the password input');  
    }  
    else if(username.value!==usernameCheck || password.value!==passwordCheck){
        alert('your account is not found')
    }
    else {  
        alert('sign in is successfully!!')  
        window.close()
        window.open('../index.html')  
    }  
}











