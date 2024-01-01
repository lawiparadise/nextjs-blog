import { Avatar, Box, IconButton, Link, Typography, useTheme } from "@mui/material"
import { useContext, useState } from "react"
import { ColorModeContext } from "@/components"
import NextLink from 'next/link'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export const CatESCAvatar = () => {
	const theme = useTheme()
	const colorMode = useContext(ColorModeContext)

	const title = process.env.NEXT_PUBLIC_BLOG_TITLE

	return (
		<Box sx={{ p: 3 }}>
			<Avatar
				src="/images/coding_cat.gif"
				sx={{ mb: 2, width: 144, height: 144, mx: "auto" }}
			/>
			<Link href="/" component={NextLink} key="key-title" color="inherit" >
				<Typography variant="h3" fontFamily="Consolas" align="center">
					{title}
				</Typography>
			</Link>
			<p style={{ fontFamily: "Consolas", fontSize: "1.1em", marginLeft: 25, marginTop: 5, marginBottom: 0 }}>while:
				<IconButton onClick={colorMode.toggleColorMode} color="inherit">
					{theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
				</IconButton>
				<span>&nbsp;</span>
				<span className="pointESC3" style={{ "backgroundSize": "16px" }}>E</span>at&nbsp;
				<span className="pointESC3" style={{ "backgroundSize": "17px" }}>S</span>leep&nbsp;
				<span className="pointESC3" style={{ "backgroundSize": "18px" }}>C</span>ode&nbsp;
			</p>
		</Box>
	)
}