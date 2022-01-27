const newPetProfile = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#new-pet-name').value.trim();
    const type = document.querySelector('#type').value.trim();
 
  
    if ( name && type) {
      const response = await fetch('/api/pet', {
        method: 'POST',
        body: JSON.stringify({ name, type }),
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
  
  
  document.querySelector('.new-pet').addEventListener('click', newPetProfile);