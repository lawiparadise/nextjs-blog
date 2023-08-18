import { Button } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/mui"><Button variant="contained">mui</Button></Link>
      <br/>
      <Link href="/mantine"><Button variant="contained">mantine</Button></Link>
    </main>
  )
}
