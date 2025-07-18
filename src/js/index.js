const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 0.5) {
    btnTopo.classList.add('mostrar');
  } else {
    btnTopo.classList.remove('mostrar');
  }
});
btnTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
