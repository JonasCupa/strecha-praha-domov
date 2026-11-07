// Flowsync formuláře — odeslání poptávky přes https://forms.flowsync.cz/api/send.
// Příjemce určuje server podle `site` (e-mail uvedený na webu); klíče nejsou v kódu webu.
export type FlowsyncResult = { ok: boolean; message?: string; fields?: string[] };
export type FlowsyncData = {
  name: string; email?: string; phone?: string; message?: string;
  fields?: Record<string, string>; website?: string; subject?: string;
};

const ENDPOINT = 'https://forms.flowsync.cz/api/send';
const loadedAt = typeof window !== 'undefined' ? Date.now() : 0;
const NET_ERR = 'Zprávu se nepodařilo odeslat (chyba připojení). Zkuste to prosím znovu, nebo nám napište e-mail či zavolejte.';

function testToken(): string | null {
  try {
    const m = /[?&]fstest=([A-Za-z0-9_-]{8,})/.exec(window.location.search);
    if (m) window.sessionStorage.setItem('fstest', m[1]);
    return window.sessionStorage.getItem('fstest');
  } catch {
    return null;
  }
}

export async function sendFlowsyncForm(site: string, data: FlowsyncData): Promise<FlowsyncResult> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const tok = testToken();
  if (tok) headers['x-fs-test'] = tok;
  const fields: Record<string, string> = {};
  for (const [k, v] of Object.entries(data.fields || {})) if (v) fields[k] = v;
  try {
    const r = await fetch(ENDPOINT, {
      method: 'POST', headers, credentials: 'omit',
      body: JSON.stringify({
        site, ...data, fields,
        page: window.location.origin + window.location.pathname,
        t: Date.now() - loadedAt,
      }),
    });
    const j = (await r.json().catch(() => null)) as FlowsyncResult | null;
    return j && typeof j.ok === 'boolean' ? j : { ok: false, message: NET_ERR };
  } catch {
    return { ok: false, message: NET_ERR };
  }
}
