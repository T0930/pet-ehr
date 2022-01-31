// delete diagnosis

const deleteDx = async (event) => {
  
  const delDx = document.querySelector('#dx-chart');
  const dx_id = delDx.getAttribute('data-id')

  if ( dx_id ) {
    const response = await fetch(`/api/dx/${dx_id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete diagnosis.');
    }
  }
};

document.querySelector('.deleteDx').addEventListener('click', deleteDx);


