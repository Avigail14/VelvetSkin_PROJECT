function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }






















let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let i;
  let slides = Array.from(document.getElementsByClassName("mySlides"));
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if(slides.length>1){
    slides[slideIndex-1].style.display = "block";
  } 
 
}

//shop




//to other pages link

function acidPage(){
  location.href="HTML/infoAboutAcids.html";}

function loginPage(){
  location.href="HTML/signInLogIn.html";
}

function shopPage(){
  location.href="HTML/productsShop.html";
}

