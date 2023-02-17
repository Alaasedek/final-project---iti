let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}




document.getElementById("redir").onclick = function () {
    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    console.log(fname.length, lname.length);
    if (fname.length < 3) {
        alert("Name must be more than 3");
        console.log('here')
    }
    else if (fname.length > 15) {
        alert("Name must be less than 3");
        console.log('here')
    }
    else {
        window.open(
            "thanks.html", "_blank");
    }
};