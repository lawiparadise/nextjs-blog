'use client'

import { Button } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [hi, setHi] = useState('hi');

  useEffect(() => {
    fetch("https://media.giphy.com/media/OoxMUQW6wh1EftvSGH/giphy.gif")
      .then(response => setHi(response.url))
  }, [])

  return (
    <main>
      <h1>{hi}</h1>
      <Link href="/mui"><Button variant="contained">mui</Button></Link>
      <br/>
      <Link href="/mantine"><Button variant="contained">mantine</Button></Link>
    </main>
  )
}
