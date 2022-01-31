
// // const user = req.session.user_id;

// const newPetProfile = async (event) => {
  
//     event.preventDefault();
//     console.log('click')
  
//     const pet_name = document.querySelector('#new-pet-name').value.trim();
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const pet_type = document.querySelector('input[name="type"]:checked').value;
//     const breed = document.querySelector('#pet-breed').value.trim();
//     const vet_clinic = document.querySelector('#vet-clinic').value.trim();
//     const vet_name = document.querySelector('#vet-name').value.trim();
//     const age = document.querySelector('#age').value.trim();

//     const newPet = document.querySelector('.new-pet');
    
//     const user_id = newPet.getAttribute('data-id')
//     console.log(pet_name)




  
//     if ( pet_name ) {
//       const response = await fetch('/upload', {
//         method: 'POST',
//         body: JSON.stringify({ pet_name, pet_type, gender, breed, vet_clinic, vet_name, age, user_id}),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       console.log(response)
//       if (response.ok) {
        // document.location.reload();
      // } else {
//         alert('Failed to add pet.');
//       }
//     }
    
//   };

// };
  
  // document.querySelector('.new-pet').addEventListener('submit', newPetProfile);
