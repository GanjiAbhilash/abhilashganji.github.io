// Cloudflare Worker — proxies chatbot requests to HuggingFace
// Deploy: npx wrangler deploy
// Set secret: npx wrangler secret put HF_TOKEN

const HF_API = 'https://router.huggingface.co/v1/chat/completions';
const ALLOWED_ORIGINS = [
  'https://abhilashganji.github.io',
  'https://abhilashganji.com',
  'https://www.abhilashganji.com',
];

function isAllowedOrigin(origin) {
  if (!origin) return false;
  return ALLOWED_ORIGINS.includes(origin)
    || origin.includes('localhost')
    || origin.includes('127.0.0.1');
}

function getCorsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  return {
    'Access-Control-Allow-Origin': isAllowedOrigin(origin) ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default {
  async fetch(request, env) {
    const CORS_HEADERS = getCorsHeaders(request);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: CORS_HEADERS });
    }

    // Origin check
    const origin = request.headers.get('Origin') || '';
    if (origin && !isAllowedOrigin(origin)) {
      return new Response('Forbidden', { status: 403, headers: CORS_HEADERS });
    }

    try {
      const body = await request.json();

      // Validate request shape
      if (!body.messages || !Array.isArray(body.messages)) {
        return new Response(JSON.stringify({ error: 'Invalid request' }), {
          status: 400,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        });
      }

      // Forward to HuggingFace
      const hfResponse = await fetch(HF_API, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: body.model || 'meta-llama/Llama-3.1-8B-Instruct',
          messages: body.messages,
          max_tokens: Math.min(body.max_tokens || 200, 300),
          temperature: body.temperature ?? 0.7,
          top_p: body.top_p ?? 0.9,
          stream: false,
        }),
      });

      const data = await hfResponse.text();
      return new Response(data, {
        status: hfResponse.status,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    } catch {
      return new Response(JSON.stringify({ error: 'Proxy error' }), {
        status: 500,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }
  },
};
