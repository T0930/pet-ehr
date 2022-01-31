
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
  const deleteV = document.querySelector('.deleteVax')
  const vax_id = deleteV.getAttribute('data-id')
  console.log(vax_id)

  // await fetch(`/api/vax/${vax_id}`, {
  //   method: 'DELETE'
  // });

  // document.location.replace('/');
};

document.querySelector('.deleteVax').addEventListener('click', deleteVax);

