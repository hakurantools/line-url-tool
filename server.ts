import { serve } from "https://deno.land/std/http/server.ts";

// API処理を行うハンドラ関数
const handler = (req: Request): Response => {
    const urlParams = new URL(req.url).searchParams;
    const url = urlParams.get("url");
    const img = urlParams.get("img");
    const x = urlParams.get("x");
    const y = urlParams.get("y");
    const title = urlParams.get("title");
    const text = urlParams.get("text");

    // 必要なパラメータが欠けていたらエラーメッセージを返す
    if (!url || !img || !x || !y || !title || !text) {
        return new Response("必要なパラメータが足りません。", { status: 400 });
    }

    // パラメータを基にLINE用URLを生成
    const generatedUrl = `https://line-url.deno.dev/url?url=${encodeURIComponent(url)}&img=${encodeURIComponent(img)}&x=${encodeURIComponent(x)}&y=${encodeURIComponent(y)}&title=${encodeURIComponent(title)}&text=${encodeURIComponent(text)}`;

    // 生成したURLを返す
    return new Response(generatedUrl, {
        headers: { "Content-Type": "text/plain" },
    });
};

// サーバー起動
console.log("Server running on http://localhost:8000");
serve(handler, { port: 8000 });
