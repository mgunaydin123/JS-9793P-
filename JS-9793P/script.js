let sayac = 0;

let uyariYazilari = [
    'Dikkatinizi dağıtmadan çalışmak, üretkenliğinizi artırır.',
    'Telefonunuzun size engel olmasını engelleyin!',
    'Odaklanarak daha iyi sonuçlar elde edebilirsiniz.',
    'Başarı, kendine olan inancın ve azmin birleşimidir.',
    'Her ders, bir fırsattır. Potansiyelinizi keşfetmek için en iyi şekilde değerlendirin.'
];

// Uyarı yazılarını değiştirme
let uyariYazisiElement = document.getElementById('uyari-yazisi');
let uyariSayaç = 0;
setInterval(() => {
    uyariYazisiElement.innerText = uyariYazilari[uyariSayaç];
    uyariSayaç = (uyariSayaç + 1) % uyariYazilari.length;
}, 8000); 

// Butona tıklama işlevi
document.getElementById('clickButon').onclick = function() {
    sayac++; 
    document.getElementById('sayac').innerText = sayac; // HTML'deki sayaç değerini güncelleme
};

// Reset butonu işlevi
document.getElementById('resetButon').onclick = function() {
    sayac = 0; // Sayaç değişkenini sıfırlama
    document.getElementById('sayac').innerText = sayac; // HTML'deki sayaç değerini güncelleme
};
