window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});
function toggleMenu() {
    var menuToggle = document.querySelector(".openMenu");
    menuToggle.classList.toggle("active");

    var menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector(".fName").value;
    let email = document.querySelector(".pEmail").value;
    let message = document.querySelector(".message").value;
    console.log(name, message, email);
    fetch("http://localhost:5000/api/mail", {
        method: "POST",
        body: JSON.stringify({
            name, email, message
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));
})