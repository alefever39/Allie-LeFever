const aboutMe = document.getElementById('about-me-main');
const hobbies = document.getElementById('my-hobbies-main');

function selectText(elementId) {
    aboutMe.style.display = "none"
    hobbies.style.display = "none"

    const Id = document.getElementById(elementId);
    Id.style.display = "block";
}