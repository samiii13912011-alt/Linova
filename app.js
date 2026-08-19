document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("themeBtn");

    btn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            btn.textContent = "🌙 حالت تیره";
        } else {
            btn.textContent = "☀️ حالت روشن";
        }

    });

});