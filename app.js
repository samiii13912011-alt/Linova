document.addEventListener("DOMContentLoaded", () => {

    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.textContent = "🌙 حالت تیره";
        } else {
            themeBtn.textContent = "☀️ حالت روشن";
        }
    });

    animateCounter("users", 25);
    animateCounter("visits", 350);

});


function animateCounter(id, target) {

    const element = document.getElementById(id);

    if (!element) {
        alert("عنصر " + id + " پیدا نشد!");
        return;
    }

    let value = 0;

    const timer = setInterval(() => {

        value += 1;
        element.textContent = value;

        if (value >= target) {
            clearInterval(timer);
        }

    }, 20);
}