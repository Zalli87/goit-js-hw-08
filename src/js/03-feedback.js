import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

const formData = {};

getLocalStorageFormData();

form.addEventListener('input', throttle(onFormIntutChange, 500));
form.addEventListener('submit', onFormSubmit);

function onFormIntutChange(evt) {
    formData[evt.target.name] = evt.target.value;
    const localStorageFormData = JSON.stringify(formData);
    localStorage.setItem('feedback-form-state', localStorageFormData); 
};

function onFormSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem('feedback-form-state')
    evt.currentTarget.reset();
    console.log(formData);
}

function getLocalStorageFormData() {
    const savedFormData = localStorage.getItem('feedback-form-state');
    const parseData = JSON.parse(savedFormData);
    if (parseData) {
        const { email, message } = parseData;
        formData.email = email;
        formData.message = message;
        input.value = parseData.email ? parseData.email : '';
        textarea.value = parseData.message ? parseData.message : '';
 }
}
