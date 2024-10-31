
const showSearchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search");

showSearchButton.addEventListener("click", () => {
    searchInput.classList.toggle("hidden");
    if (!searchInput.classList.contains("hidden")) {
        searchInput.focus();
    }
});