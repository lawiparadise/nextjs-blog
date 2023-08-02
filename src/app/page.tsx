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
      <Button variant="contained"><Link href="/mui">mui</Link></Button>
    </main>
  )
}
