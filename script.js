document.getElementById("urlForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const url = encodeURIComponent(document.getElementById("url").value);
    const img = encodeURIComponent(document.getElementById("img").value);
    const x = encodeURIComponent(document.getElementById("x").value);
    const y = encodeURIComponent(document.getElementById("y").value);
    const title = encodeURIComponent(document.getElementById("title").value);
    const text = encodeURIComponent(document.getElementById("text").value);

    // Denoサーバーへのリクエスト
    fetch(`http://localhost:8000?url=${url}&img=${img}&x=${x}&y=${y}&title=${title}&text=${text}`)
        .then(response => response.text())
        .then(generatedUrl => {
            document.getElementById("resultUrl").textContent = generatedUrl;
        })
        .catch(error => {
            console.error("URL生成エラー:", error);
        });
});
