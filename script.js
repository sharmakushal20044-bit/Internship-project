function showMsg() {
    alert("Welcome 🚀 Internship Project Ready!");
}// Page load animation
window.onload = function () {
    document.body.classList.add("loaded");
};

// Page transition on click
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // only internal links
        if (href && href.endsWith(".html")) {
            e.preventDefault();

            document.body.classList.remove("loaded");

            setTimeout(() => {
                window.location.href = href;
            }, 400);
        }
    });
});