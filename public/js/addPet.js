
// const user = req.session.user_id;

const newPetProfile = async (event) => {
  
    event.preventDefault();
console.log('hello');
  
    const pet_name = document.querySelector('#new-pet-name').value.trim();
    const pet_type = document.querySelector('#type').value.trim();

    const newPet = document.querySelector('.new-pet');
    
    const user_id = newPet.getAttribute('data-id')
    


  
    if ( pet_name && pet_type && user_id) {
      const response = await fetch('/api/pet', {
        method: 'POST',
        body: JSON.stringify({ pet_name, pet_type, user_id}),
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
