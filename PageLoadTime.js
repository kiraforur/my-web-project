(function () {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("timer").innerText = "Page load time is: " + performance.now().toPrecision(5) + " ms";
    })
})();