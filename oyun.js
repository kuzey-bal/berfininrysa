const oyunAlani = document.getElementById('oyun-alani');

// --- Sahne Tanımları ---

// 1. Sahne: Başlangıç ve İlk Kritik Seçim
function sahne1() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">😐</span>
        <h2>Ay Işığı Koyu: Donmuş An</h2>
        <p>Gözlerinizi açtığınızda, tanıdık ama bir o kadar da yabancı bir loşluk sizi sarıyor. Burası, her zaman hayalini kurduğunuz o sahne... <strong>Ay Işığı Koyu</strong>. Kumlar ayaklarınızın altında buz gibi, ancak gökyüzü, milyonlarca elmasla işlenmiş gibi parlıyor.</p>
        <p>Hemen ileride, suyun kenarında, <strong>Kuzey Balat</strong> sırtı size dönük duruyor. Elinde küçük, kadife bir kutu tutuyor ve derin bir gerginlik seziliyor. Size seslenmekten çekiniyor gibi.</p>
        <p><strong>Bu kritik anda, ilk tepkiniz ne olacak?</strong></p>
        
        <button class="secenek-btn" onclick="sahne2B_Saril()">💖 Hemen koşup arkasından sıkıca sarılmak.</button>
        <button class="secenek-btn" onclick="sahne2A_Yanlis1()">⏳ Sessizce bekleyip, onun size dönmesini ummak.</button>
    `;
}

// 2A. Sahne: Yanlış Yol 1 - Bekleyişin Bedeli (Kuzey Ağlar)
function sahne2A_Yanlis1() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">😢</span>
        <h2>Bekleyişin Bedeli</h2>
        <p>Sessizce beklemeyi tercih ettiniz. Kuzey, elindeki kutuyu sıkıyor. Bir süre sonra, bir umutsuzlukla başını iki yana sallıyor.</p>
        <p><strong>"Yine mi yalnız kaldım..."</strong> diye fısıldıyor ve fırlattığı kadife kutu kumların üzerine düşüyor. Omuzları çökerken gözleri yaşlarla doluyor. Bekleyişiniz onu incitti.</p>
        <p><strong>💔 Rüyadan sarsılarak uyandın. Kuzey'in gözyaşları son gördüğün şey oldu.</strong></p>
        <button class="secenek-btn" onclick="sahne1()">Rüyayı Yeniden Dene</button>
    `;
}

// 2B. Sahne: Doğru Yol 1 - Sarılmanın Gücü (Ara Karar)
function sahne2B_Saril() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">😊</span>
        <h2>Sıcaklık ve Rahatlama</h2>
        <p>Hızla kumların üzerinde ilerleyip, ona sıkıca sarılıyorsunuz. Vücudunu saran o tanıdık koku, rüyanın gerçekliğini kanıtlıyor. Kuzey'in vücudundaki gerginlik anında dağılıyor. Yüzünü size çeviriyor, gözlerinde şaşkınlık ve büyük bir **rahatlama** var.</p>
        <p><strong>Kuzey:</strong> "Berfin... Sen gerçeksin. Buraya gelmek kolay olmadı, bizi bir seçim yapmaya zorladılar..."</p>
        <p><strong>Şimdi, bu belirsizliğe karşı tepkiniz ne olacak?</strong></p>
        
        <button class="secenek-btn" onclick="sahne3B_Dogru2()">🗣️ "Ne olursa olsun, yanındayım. Ne oldu anlat!" (Sakin ve Destekleyici)</button>
        <button class="secenek-btn" onclick="sahne3A_Yanlis2()">🏃‍♀️ "Hemen gitmeliyiz! Bu rüyadan çıkmalıyız!" (Panik ve Güvensizlik)</button>
    `;
}

// 3A. Sahne: Yanlış Yol 2 - Panik ve Güvensizlik (Kuzey Şiddetli Ağlar)
function sahne3A_Yanlis2() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">😭</span>
        <h2>Panik ve Güvensizlik</h2>
        <p>Telaşla onu sürüklemeye çalıştınız. Kuzey, elinizi tutar ama yüzündeki rahatlama yerini büyük bir hayal kırıklığına bırakır. Gözleri yeniden yaşlarla dolar, ama bu kez daha acı bir şekilde.</p>
        <p><strong>Kuzey:</strong> "Yine mi kaçıyorsun? Güvenmiyorum sana Berfin. Benimle yüzleşmeden bu rüyadan kaçamazsın."</p>
        <p>Sözleri bir gölge gibi üzerinize çöker. Kuzey başını ellerinin arasına alır ve **hıçkırarak ağlamaya başlar**. Artık geri dönüş yok.</p>
        <p><strong>🌑 Rüya, bir kabusa dönüştü. Kuzey Balat, sonsuza dek orada kaldı.</strong></p>
        <button class="secenek-btn" onclick="sahne1()">Rüyayı Yeniden Dene</button>
    `;
}

// 3B. Sahne: Doğru Yol 2 - Kararlı Destek (Teklife Hazırlık)
function sahne3B_Dogru2() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">😍</span>
        <h2>Kararlılık ve Aşk</h2>
        <p>Sakinliğiniz ve kararlılığınız Kuzey'e güç verdi. Yüzündeki endişe tamamen kayboldu. Gözyaşlarını siler ve gülümsüyor. Bu gülümseme, gördüğün en güzel şey.</p>
        <p><strong>Kuzey:</strong> "Sakinliğin beni kurtardı. Testi geçtin Berfin'im... Görmem gereken buydu. Tüm bu kaosun ortasında bile yanımda olacağın..."</p>
        <p>Derin bir nefes alır, elindeki kadife kutuyu açar. Yüzük, Ay Işığının altında parlar.</p>
        <p><strong>Kuzey:</strong> "Şimdi... sadece tek bir son görevim kaldı."</p>
        <button class="secenek-btn" onclick="sahne4_Teklif()">💍 İleri Git: Evlenme Teklifini Dinle</button>
    `;
}

// 4. Sahne: Evlenme Teklifi (Final Seçim)
function sahne4_Teklif() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">💖</span>
        <h2>O An...</h2>
        <p>Kuzey Balat, dizlerinin üzerine çöker. Yüzüğü size uzatır. Dünden bugüne yaşadığınız tüm anlar zihninizden bir film şeridi gibi geçer.</p>
        <p><strong>Kuzey:</strong> "Berfin'im. Rüya da olsan, gerçek de... Hayatımın en büyük gerçeği sensin. Tüm risklere rağmen, seni seçiyorum. Benimle evlenip, bu rüyayı sonsuza dek gerçeğe dönüştürür müsün?"</p>
        
        <button class="secenek-btn" onclick="sahneFinalEvet()">✨ EVET ✨ (Mutlu Son)</button>
        <button class="secenek-btn" onclick="sahneFinalHayir()">💔 HAYIR 💔 (Kötü Son)</button>
    `;
}

// Final Sahnesi - EVET
function sahneFinalEvet() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">👰‍♀️🥳</span>
        <h2>MUTLU SON!</h2>
        <p>Berfin heyecanla <strong>"EVET!"</strong> diye bağırdı. Kuzey'in sevinçten gözleri doldu. Yüzüğü parmağına taktı ve sizi kucakladı. Ay Işığı Koyu, şimdi şahit olduğu en güzel ana tanıklık ediyordu.</p>
        <p><strong>💖 Rüyanda bulduğun aşk, artık senin gerçeğin. Tebrikler!</strong></p>
        <button class="secenek-btn" onclick="sahne1()">Yeniden Oyna</button>
    `;
}

// Final Sahnesi - HAYIR
function sahneFinalHayir() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">😭😭😭</span>
        <h2>KÖTÜ SON...</h2>
        <p>Berfin sessizce başını iki yana salladı. Kuzey'in yüzündeki tüm ışık söndü. Yüzük kutusunu kapattı ve kalktı. **Gözlerinden sessiz, kesik yaşlar süzülüyordu.** Hayatının rüyası, senin cevabınla paramparça oldu.</p>
        <p><strong>🌑 Rüya, bir kabusa dönüştü ve uyandığında Kuzey yanınızda değildi.</strong></p>
        <button class="secenek-btn" onclick="sahne1()">Yeniden Oyna</button>
    `;
}

// Oyunu Başlat
sahne1();
