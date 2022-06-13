// select html icon
const htmlIcon = document.getElementById('html-icon');
//  select html cert
const htmlCard = document.getElementById('html-card');

// add event listener to html icon
htmlIcon.addEventListener('click', () => {
    if (htmlCard.style.display === "none"){
        htmlCard.style.display = "block"
    }else {
        htmlCard.style.display = "none"
    }
    
});