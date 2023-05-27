const btn = document.querySelector("#topo");

function scrollToTop(event){
  event.preventDefault();

  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: 0
  })
}

btn.addEventListener("click", scrollToTop)