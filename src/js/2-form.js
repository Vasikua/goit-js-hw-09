
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');


function readFormData(event) {
   let email = form.email.value.trim();
   let message = form.message.value.trim();
  return {
        email,
      message
  };
}

form.addEventListener('input', (event) => {
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
  
})


 try { 
    const rowData = localStorage.getItem(STORAGE_KEY);
    const data = JSON.parse(rowData);    
    form.email.value = data.email;
    form.message.value = data.message;
 }
 catch (error) {
     console.log('Local storage is empty')
}  

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let email = form.email.value.trim();
   let message = form.message.value.trim();
  if (email && message) {
        console.log({email, message});
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
  }
})