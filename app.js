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

function animateCounter(id, target) {

    let value = 0;

    const element = document.getElementById(id);

    const timer = setInterval(() => {

        value++;

        element.textContent = value;

        if (value >= target) {
            clearInterval(timer);
        }

    }, 30);

}

animateCounter("users", 25);
animateCounter("visits", 350);