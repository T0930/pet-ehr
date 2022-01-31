const deleteVax = async (event) => {
  
    const delVax = document.querySelector('#vax-chart');
    const vax_id = delVax.getAttribute('data-id')
  
    if ( vax_id ) {
      const response = await fetch(`/api/vax/${vax_id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete vaccination entry.');
      }
    }
  };

  document.querySelector('.deleteVax').addEventListener('click', deleteVax);