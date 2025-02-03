const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const invitation = document.getElementById('invitation');
const taunt = document.getElementById('taunt');

let hoverCount = 0;
let clickCount = 0;

noBtn.addEventListener('mouseover', () => {
    const rect = document.querySelector('.container').getBoundingClientRect();
    const x = Math.random() * (rect.width - noBtn.offsetWidth - 100);
    const y = Math.random() * (rect.height - noBtn.offsetHeight - 100);

    noBtn.style.position = 'absolute';
    noBtn.style.left = (x + 50) + 'px';
    noBtn.style.top = (y + 50) + 'px';

    hoverCount++;

    if (hoverCount > 5) {
        if (Math.random() < 0.3) {
            taunt.style.display = 'block';
            taunt.style.left = (x + noBtn.offsetWidth / 2) + 'px';
            taunt.style.top = (y - 40) + 'px';
            setTimeout(() => {
                taunt.style.display = 'none';
            }, 1500);
        }
    }
});

yesBtn.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 1) {
        yesBtn.textContent = 'Are you sure?';
    } else {
        invitation.style.display = 'block';
        noBtn.style.display = 'none';
        yesBtn.style.display = 'none';
    }
});
