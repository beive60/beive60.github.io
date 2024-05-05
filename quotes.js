// quotes.js
const quotes = [
    { text: "なーん", audio: "static/na-nn.mp3", category: "鳴き声" },
    // 他の名言を追加...
];

window.onload = function() {
    const quoteButtonsDiv = document.getElementById('quoteButtons');
    const volumeSlider = document.getElementById('volumeSlider');

    quotes.forEach((quote, index) => {
        const button = document.createElement('button');
        button.textContent = quote.text;
        button.onclick = function() {
            const audio = new Audio(quote.audio);
            audio.volume = volumeSlider.value;
            audio.play();
        };
        quoteButtonsDiv.appendChild(button);
    });
};
