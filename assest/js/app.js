const up = document.getElementById("up");
up.textContent = "UP";

function showUP() {
  if (window.scrollY >= 500) {
    up.style.display = "flex";
  } else {
    up.style.display = "none";
  }
}
window.addEventListener('scroll', showUP)

up.addEventListener('click',()=>{
  window.scrollTo(0,0)
})