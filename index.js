export default {
  async fetch(request) {
    if (request.method === "POST") {
      const data = await request.json();
      return new Response(JSON.stringify({ received: data }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    if (request.method === "GET") {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("Method Not Allowed", { status: 405 });
  }
};
