export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/webhook") {
      try {
        const payload = await request.json();
        
        // 這裡放你 Bot 的主要邏輯（例如處理 Codeforces API 或訊息）
        console.log("收到 Bot 訊息:", payload);

        return new Response(JSON.stringify({ status: "success" }), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response("Error", { status: 500 });
      }
    }

    // 2. 其他路徑，自動交給 Hugo 的靜態網頁（public 資料夾）
    return env.ASSETS.fetch(request);
  }
};