document.addEventListener('DOMContentLoaded', () => {
  const btnHamburguesa = document.getElementById('btnHamburguesa');
  const menuArtesania = document.getElementById('menuArtesania');

  if (btnHamburguesa && menuArtesania) {
    btnHamburguesa.addEventListener('click', () => {
      menuArtesania.classList.toggle('hidden');
      menuArtesania.classList.toggle('mt-4');
    });
  }
});