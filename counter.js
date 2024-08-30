document.addEventListener('DOMContentLoaded', () => {

    var toDayFromNow = (new Date("Sep 02, 2024 23:59:59").getTime() / 1000) + (3600 / 60 / 60 / 24) - 1;

    var flipdown = new FlipDown(toDayFromNow)
        .start()
        // .ifEnded(() => {
        //     document.querySelector(".flipdown").innerHTML = `<h2>O tempo acabou!</h2>`;
        // });

    const firstRotorGroup = document.querySelectorAll('.rotor-group .rotor-top');

    const daysLeftDiv = document.getElementById('days-left');

    daysLeftDiv.appendChild(firstRotorGroup[1]);
});