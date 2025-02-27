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
let uyariSayac = 0;
setInterval(() => {
    uyariYazisiElement.innerText = uyariYazilari[uyariSayac];
    uyariSayac = (uyariSayac + 1) % uyariYazilari.length; // Dizinin sonuna geldiğinde başa döner
}, 8000); 


document.getElementById('clickButon').onclick = function() {
    sayac++; 
    document.getElementById('sayac').innerText = sayac; // HTML'deki sayaç değerini güncelleme
};


document.getElementById('resetButon').onclick = function() {
    sayac = 0;
    document.getElementById('sayac').innerText = sayac; 
};
