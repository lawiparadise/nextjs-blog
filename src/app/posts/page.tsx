'use client'

import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { Button, useTheme, Box, IconButton } from '@mui/material'
import { ColorModeContext } from '@/components'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export default function Home() {
  const [hi, setHi] = useState('hi');

  useEffect(() => {
    fetch("https://media.giphy.com/media/OoxMUQW6wh1EftvSGH/giphy.gif")
      .then(response => setHi(response.url))
  }, [])

  return (
    <main>
      <h1>{hi}</h1>
      <Button variant="contained">hi</Button>

      <br />
      <br />
      <br />

    </main>
  )
}
