const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');


burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active'); 
   
})

function showButton() {
    var x = document.getElementById("HeaderAreaHide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
  }

