  // Masquer toutes les pages sauf inscription au début
  document.getElementById('page-food').classList.add('hidden');
  document.getElementById('page-profile').classList.add('hidden');

  const form = document.getElementById('form-inscription');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('page-inscription').classList.add('hidden');
    document.getElementById('page-loading').classList.remove('hidden');

    // Simule chargement 2 secondes
    setTimeout(() => {
      document.getElementById('page-loading').classList.add('hidden');
      document.getElementById('page-conditions-1').classList.remove('hidden');
    }, 2000);
  });

  function allerAuxConditions2() {
    document.getElementById('page-conditions-1').classList.add('hidden');
    document.getElementById('page-conditions-2').classList.remove('hidden');
  }

  function terminerInscription() {
    document.getElementById('page-conditions-2').classList.add('hidden');
    document.getElementById('page-food').classList.remove('hidden');
  }