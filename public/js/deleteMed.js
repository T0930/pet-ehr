const deleteMed = async (event) => {
  
    const delMed = document.querySelector('#med-chart');
    const meds_id = delMed.getAttribute('data-id')
  
    if ( meds_id ) {
      const response = await fetch(`/api/meds/${meds_id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete medication entry.');
      }
    }
  };

  document.querySelector('.deleteMed').addEventListener('click', deleteMed);