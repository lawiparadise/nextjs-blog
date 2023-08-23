import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('theme')?.value === 'light' ? 'dark' : 'light'

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `theme=${token}` },
  })
}