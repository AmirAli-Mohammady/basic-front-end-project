document.addEventListener("DOMContentLoaded", function() {  
    const signInBtn = document.querySelector('.signin_btn');
    if (signInBtn) {
        signInBtn.addEventListener('click', function() {
            window.open('./form/form.html');
        });
    }
})
document.addEventListener("DOMContentLoaded", function() {  
    let signInBtn = document.querySelector('.signin_btn a');
    // console.log(signInBtn.innerHTML);
    let username = localStorage.getItem('username');
    if (username && signInBtn) {
        signInBtn.innerHTML = username;
    } else if (signInBtn) {
        signInBtn.textContent = 'Sign In';
    }
});