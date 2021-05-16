days = document.getElementById("days");
hours = document.getElementById("hours");
minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");


countdown = () => {
    const summerStart = new Date('1 Jul 2021');
    const today = new Date();
    const difference = summerStart - today;
    const totalSeconds = (difference  ) / 1000;

    seconds.innerHTML = isSmallerThan10(Math.floor(totalSeconds % 60));
    minutes.innerHTML = isSmallerThan10(Math.floor(totalSeconds / 60 % 60));
    hours.innerHTML = isSmallerThan10(Math.floor((totalSeconds / 3600) % 24));
    days.innerHTML = isSmallerThan10(Math.floor(totalSeconds / 3600 / 24));
}

isSmallerThan10 = (number) => {
    return number > 10 ? number : `0${number}`;
}  

setInterval(countdown, 1000);