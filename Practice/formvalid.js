//Form validation
let registrationForm = document.querySelector("#register-form")
registrationForm.addEventListener('submit', function(event){
    event.preventDefault(); //it stops auto form submission
     validateForm();
});

let validateForm = () => {
    checkUserName();
};

let checkUserName= () => {
    let UsernameRef = document.querySelector("#UserName");
    let inputFeedbackRef = document.querySelector("#username-feedback");
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    if(RegExp.test(UsernameRef.value)){
         makeValid(UsernameRef,inputFeedbackRef);
    }
    else{
        makeInValid(UsernameRef,inputFeedbackRef);
    }
};

//make valid
let makeValid = (UsernameRef,inputFeedbackRef) => {
    UsernameRef.classList.add('is-form-valid');
    UsernameRef.classList.remove('is-form-invalid');
    inputFeedbackRef.classList.add('text-success');
    inputFeedbackRef.classList.remove('text-danger');
    inputFeedbackRef.innerText = `Looks Good`
};
//make invalid
let makeInValid = (UsernameRef,inputFeedbackRef) => {
    UsernameRef.classList.remove('is-form-valid');
    UsernameRef.classList.add('is-form-invalid');
    inputFeedbackRef.classList.remove('text-success');
    inputFeedbackRef.classList.add('text-danger');
    inputFeedbackRef.innerText = `Please Enter a ${UsernameRef.placeholder}`
}