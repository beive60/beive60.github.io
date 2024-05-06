// quotes.js
const quotes = [
    { text: "なーん", audio: "static/na-nn.mp3", category: "鳴き声" },
    { text: "ヤだ", audio: "static/yada.mp3", category: "返答" },
    // 他の名言を追加...
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
