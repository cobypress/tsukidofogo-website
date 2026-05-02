import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  console.log('[Tsuki Do Fogo] New enquiry:', JSON.stringify(body, null, 2))

  // ─── Formspree integration ───────────────────────────────────────────────────
  // Set FORMSPREE_ENDPOINT in .env.local to enable email forwarding:
  // FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
  if (process.env.FORMSPREE_ENDPOINT) {
    await fetch(process.env.FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    })
  }

  return NextResponse.json({ success: true })
}
