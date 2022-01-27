const session = require("express-session");
// const user_id = 1;

const newPetProfile = async (event) => {
    event.preventDefault();
  console.log('hello');
  
    const pet_name = document.querySelector('#new-pet-name').value.trim();
    const pet_type = document.querySelector('#type').value.trim();

  
    if ( pet_name && pet_type && req.session.user_id) {
      const response = await fetch('/api/pet', {
        method: 'POST',
        body: JSON.stringify({ pet_name, pet_type, req.session.}),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add pet.');
      }
    }
  };
  
  
  document.querySelector('.new-pet').addEventListener('submit', newPetProfile);