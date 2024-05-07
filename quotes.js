// quotes.js
const quotes = [
    { text: "なーん", audio: "static/na-nn.mp3", category: "泣き" },
    { text: "ヤだ", audio: "static/yada.mp3", category: "否定" },
    { text: "皆さん、本日もお疲れ様です", audio: "static/otsukaresamadesu.mp3", category: "あいさつ" },
    // 他の名言を追加...
    // あいさつ、肯定、否定、返事・リアクション、問いかけ、掛け声、恫喝、お礼、謝罪、命令、笑い、応援、慰め、効果音・悲鳴、泣き、食べ物、その他
];

window.onload = function() {
    const quoteButtonsDiv = document.getElementById('quoteButtons');
    const volumeSlider = document.getElementById('volumeSlider');

    quotes.forEach((quote, index) => {
        const button = document.createElement('button');
        button.textContent = quote.text;
        button.dataset.audio = quote.audio;  // データ属性にaudioのパスを保存
        quoteButtonsDiv.appendChild(button);
    });

    // イベント委譲を使用して、親要素にイベントリスナーを設定
    quoteButtonsDiv.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const audioPath = event.target.dataset.audio;
            const audio = new Audio(audioPath);
            audio.volume = volumeSlider.value;
            audio.play();
        }
    });
};
