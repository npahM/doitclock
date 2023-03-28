setInterval(() => {
    const now = new Date();
    console.log(now);
    const hrDeg = Math.floor(((now.getHours() / 12) * 360) + 90);
    const minDeg = Math.floor(((now.getMinutes() / 60) * 360) + 90);
    const secDeg = Math.floor(((now.getSeconds() / 60) * 360) + 90);
    document.querySelector(`.clockHand:nth-child(1)`).style.transform = `rotate(${hrDeg}deg)`;
    document.querySelector(`.clockHand:nth-child(2)`).style.transform = `rotate(${minDeg}deg)`;
    document.querySelector(`.clockHand:nth-child(3)`).style.transform = `rotate(${secDeg}deg)`;
}, 1000);
