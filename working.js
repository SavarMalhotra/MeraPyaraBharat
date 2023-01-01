var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function hm() {
    hamburger = document.getElementById('hamburger');
    navfp = document.getElementById('navfp');
    if (navfp.style.display === "none") {
        navfp.style.display = "block";
    } else {
        navfp.style.display = "none";
    }
}

let loader = document.getElementById('loading') 
window.addEventListener("load" , function(){
    loader.style.display = "none" ;
}
)

function hm() {

    let cm2 = document.getElementById('hamburger');
    let cmbm = document.getElementById('navfp')

    if (cmbm.style.display != 'block') {
        cmbm.style.display = 'block';
    }

    else {
        cmbm.style.display = 'none';
    }

}
