import { NextResponse } from 'next/server'

// Re-fetch at most once per hour at the CDN edge
export const revalidate = 3600

export interface InstagramPost {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
}

const FIELDS = 'id,media_type,media_url,thumbnail_url,permalink,caption,timestamp'

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!token) {
    return NextResponse.json({ posts: [], configured: false })
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=9&access_token=${token}`,
      { next: { revalidate: 3600 } },
    )

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error('[Instagram API error]', err)
      return NextResponse.json({ posts: [], configured: true, error: true })
    }

    const data = await res.json()

    // Only keep visual posts (skip Stories text cards etc.)
    const posts: InstagramPost[] = (data.data ?? []).filter(
      (p: InstagramPost) =>
        p.media_type === 'IMAGE' ||
        p.media_type === 'VIDEO' ||
        p.media_type === 'CAROUSEL_ALBUM',
    )

    return NextResponse.json({ posts, configured: true })
  } catch (err) {
    console.error('[Instagram fetch failed]', err)
    return NextResponse.json({ posts: [], configured: true, error: true })
  }
}
