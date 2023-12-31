import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('theme')?.value === 'light' ? 'dark' : 'light'
  cookieStore.set('theme', token)

  return new Response('theme changed!', {
    status: 200,
    // headers: { 'Set-Cookie': `theme=${token}` },
  })
}