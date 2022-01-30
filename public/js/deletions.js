
// delete diagnosis
const deleteDx = async function() {

  await fetch(`/api/dx/:id`, {
    method: 'DELETE'
  });

  // document.location.replace('/');
};

document.querySelector('.deleteDx').addEventListener('click', deleteDx);

// delete medications
const deleteMed = async function() {

  await fetch(`/api/meds/:id`, {
    method: 'DELETE'
  });

  // document.location.replace('/');
};

document.querySelector('.deleteMed').addEventListener('click', deleteMed);

// delete vaccines
const deleteVax = async function() {

  await fetch(`/api/vax/:id`, {
    method: 'DELETE'
  });

  // document.location.replace('/');
};

document.querySelector('.deleteVax').addEventListener('click', deleteVax);

