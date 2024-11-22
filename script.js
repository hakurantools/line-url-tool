document.getElementById("urlForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const url = encodeURIComponent(document.getElementById("url").value);
    const img = encodeURIComponent(document.getElementById("img").value);
    const x = encodeURIComponent(document.getElementById("x").value);
    const y = encodeURIComponent(document.getElementById("y").value);
    const title = encodeURIComponent(document.getElementById("title").value);
    const text = encodeURIComponent(document.getElementById("text").value);

    // 新しいURL（hakurantool-line-url-to-38.deno.dev）に変更
    fetch(`https://hakurantool-line-url-to-38.deno.dev/url?url=${url}&img=${img}&x=${x}&y=${y}&title=${title}&text=${text}`)
        .then(response => response.text())
        .then(generatedUrl => {
            document.getElementById("resultUrl").textContent = generatedUrl;
        })
        .catch(error => {
            console.error("URL生成エラー:", error);
        });
});
