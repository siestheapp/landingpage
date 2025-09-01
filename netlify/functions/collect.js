// netlify/functions/collect.js
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
  
    const raw = event.body || '{}';
    let payload = {};
    try { payload = JSON.parse(raw); } catch {}
  
    const now = new Date().toISOString();
  
    console.log(JSON.stringify({
      ts: now,
      event_key: payload.key || null,
      meta: payload.meta || {},
      page_path: payload.path || null,
      ip: (event.headers['x-forwarded-for'] || '').split(',')[0] || 'unknown',
      userAgent: event.headers['user-agent'] || '',
      referer: event.headers['referer'] || ''
    }));
  
    return { statusCode: 204 }; // 204 = No Content, works with sendBeacon
  };
  