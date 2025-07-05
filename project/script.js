function scrollToNewArrival() {
    const headingElement = document.getElementById('new-arrivals-heading');
    const topPosition = headingElement.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
}


function scrollToAllProducts() {
    const headingElement = document.getElementById('all-products-heading');
    const topPosition = headingElement.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
}


function scrollToContactUs() {
    const headingElement = document.getElementById('contact-heading');
    const topPosition = headingElement.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
}


function scrollToTop() {
window.scrollTo({
    top: 0, 
    behavior: 'smooth' 
});
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        document.getElementById("upButton").style.display = "block";
    } else {
        document.getElementById("upButton").style.display = "none";
    }
}


document.querySelectorAll('.add2cart').forEach(item => 
    {item.addEventListener('click', function() {

        var productImageSrc = this.parentElement.querySelector('img').src;
var productName = this.parentElement.querySelector('p').textContent;
var productPrice = this.parentElement.querySelector('span').textContent;


var popImage = document.getElementById('popupProductImage');
var popName = document.getElementById('popupProductName');
var popPrice = document.getElementById('popupProductPrice');

popImage.src = productImageSrc;
popName.textContent = productName;
popPrice.textContent = productPrice;

var popup = document.getElementById("popupWindow");
popup.style.display = "block";

});
});


document.querySelector('.popup .close-btn').addEventListener('click', function() {
var popup = document.getElementById("popupWindow");
popup.style.display = "none";
});


window.onclick = function(event) {
var popup = document.getElementById("popupWindow");
if (event.target == popup) {
    popup.style.display = "none";
}
};

document.querySelectorAll('.buy').forEach(item => {
        item.addEventListener('click', function() {
var productImageSrc = this.parentElement.querySelector('img').src;
var productName = this.parentElement.querySelector('p').textContent;
var productPrice = this.parentElement.querySelector('span').textContent;


document.getElementById('buyNowProductImage').src = productImageSrc;
document.getElementById('buyNowProductName').textContent = productName;
document.getElementById('buyNowProductPrice').textContent = productPrice;

var popup = document.getElementById("buyNowPopup");
popup.style.display = "block";

});
});


document.querySelectorAll('.popup .close-btn').forEach(closeButton => {
closeButton.addEventListener('click', function() {
    var popup = this.closest('.popup');
    popup.style.display = "none";
    document.body.style.overflow = 'auto'; 

    
    document.getElementById("buyNowForm").reset();
});
});

document.getElementById("buyNowForm").addEventListener('submit', function(event) {
event.preventDefault();

alert('Order placed successfully!');

this.reset();

// Close the popup
var popup = document.getElementById("buyNowPopup");
popup.style.display = "none";
});

function reloadPage() {
        window.location.reload();
    }

document.querySelectorAll('.popup .close-btn').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
            reloadPage();
        });
});
document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); 
    
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
  
  window.onload = function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  };
  