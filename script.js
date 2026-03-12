const iyaBtn = document.getElementById('iya');
const iyaContainer = iyaBtn.parentElement;
const tidakBtn = document.getElementById('tidak');

// Iya button: grow on hover/click, send WA
iyaBtn.addEventListener('mouseenter', () => {
    iyaContainer.style.transform = 'scale(1.2)';
});

iyaBtn.addEventListener('mouseleave', () => {
    iyaContainer.style.transform = 'scale(1)';
});

iyaBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    // Ganti dengan nomor WA Anda (format internasional, contoh: 6281234567890)
    const phoneNumber = '6282114620358'; // Masukkan nomor Anda di sini!
    const message = 'Pilihan: IYA, Saya Juga Mau ';
    const waUrl = `https://wa.me/${6282114620358}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
});

// Tidak button: dodge on mousemove/click attempt
function dodge(event) {
    const maxX = window.innerWidth - tidakBtn.offsetWidth;
    const maxY = window.innerHeight - tidakBtn.offsetHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    tidakBtn.style.position = 'fixed';
    tidakBtn.style.left = newX + 'px';
    tidakBtn.style.top = newY + 'px';
}

tidakBtn.addEventListener('mousemove', dodge);
tidakBtn.addEventListener('click', dodge);
