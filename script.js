const ratings = document.querySelectorAll("#rating");
const button = document.getElementById("btn");

const container = document.getElementById("container");

let selectedRating = "";

ratings.forEach((rating) =>{
    rating.addEventListener('click', (event) =>{
        removeActive();
        selectedRating =
            event.target.innerText || event.target.parentNode.innerText;
            event.target.classList.add("active");
            event.target.parentNode.classList.add("active");
    });
});

button.addEventListener("click", ()=> {
    if(selectedRating !== "") {
        container.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
})

function removeActive() {
    ratings.forEach((rating) =>{
        rating.classList.remove('active');
    });
}