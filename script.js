setInterval(() => {
    const currenTime = new Date();
    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    let hour = currenTime.getHours();
    let hrsfix = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour); // 12-hour format
    hrs.innerHTML = (hrsfix < 10 ? "0" : "") + hrsfix;
    min.innerHTML = (currenTime.getMinutes() < 10 ? "0" : "") + currenTime.getMinutes();
    sec.innerHTML = (currenTime.getSeconds() < 10 ? "0" : "") + currenTime.getSeconds();
}, 1000);
