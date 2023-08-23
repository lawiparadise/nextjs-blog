'use server'

import { cookies } from 'next/headers'

export async function changeThemeCookie() {
  const t = cookies().get('theme')?.value === 'light' ? 'dark' : 'light'
  // console.log('cookieStore', t)
  cookies().set('theme', t)
  return t
}