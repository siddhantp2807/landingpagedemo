const nav = document.querySelector("#nav");
const dropdown = document.querySelector("#dropdown")


nav.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
})


