const emailInput = document.querySelector('#email');
const form = document.querySelector('.form');
const hideSection = document.querySelector('.hidden-section');
const dissmissBtn = document.querySelector('button[type="button"]');
const userEmail = document.querySelector('.user-email');
const ilustration = document.querySelector('.ilustration-img');

eventListeners();

function eventListeners(){
    emailInput.addEventListener('input', validate);
    form.addEventListener('submit', validateForm);
    dissmissBtn.addEventListener('click', hideThanksMessage); 
}

function validateForm(e){
    e.preventDefault();

    if (validate()) {
        userEmail.textContent = emailInput.value; 
        hideSection.classList.remove('hidden'); 
        ilustration.classList.add('hidden');   
        form.reset(); 
    }
}

function validate(){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === '' || !regex.test(emailInput.value.trim())) {
        alertMessage('Valid email required', emailInput.previousElementSibling);        
        return false; 
    }

    return true;  
}

function alertMessage(message, reference) {
    const alert = document.createElement('DIV');
    alert.classList.add('text-tomato', 'text-xs', 'alert');
    alert.textContent = message;

    const prevAlert = document.querySelector('.alert');
    prevAlert?.remove(); // Remueve la alerta previa si existe

    reference.appendChild(alert);

    emailInput.classList.add('bg-tomato/20', 'placeholder:text-tomato', 'border-tomato', 'border-[1px]' );

    setTimeout(() => {
        alert.remove();
        emailInput.classList.remove('bg-tomato/20', 'placeholder:text-tomato', 'border-tomato', 'border-[1px]');
    }, 3000);
}

function hideThanksMessage() {
    hideSection.classList.add('hidden');
    ilustration.classList.remove('hidden');     
}

