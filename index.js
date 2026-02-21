export default {
  async fetch(request) {

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    const corsHeaders = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "POST") {
      const data = await request.json();
      return new Response(JSON.stringify({ received: data }), {
        headers: corsHeaders
      });
    }

    if (request.method === "GET") {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: corsHeaders
      });
    }

    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }
};
