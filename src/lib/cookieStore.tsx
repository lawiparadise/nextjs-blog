'use server'

import { cookies } from 'next/headers'

export async function setThemeCookie(mode: string) {
  console.log('cookieStore', mode)
  cookies().set('theme', mode)
  return mode
}