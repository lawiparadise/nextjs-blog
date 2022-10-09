import { NextPage } from "next";
import { FC, ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// js에서 에러 뜸
interface Props {
  children: ReactNode
}

// export default function DefaultLayout({children}) { // js에서 됨1
// const DefaultLayout = ({ children }) => { // js에서 됨2
// const DefaultLayout = props => { // js에서 됨3
//     const {children} = props

// const DefaultLayout = ({ children }: Props) => { // ts에서 됨1
// const DefaultLayout: NextPage = ({children}: { children: ReactNode }) => { // ts에서 됨2
// const DefaultLayout: NextPage = ({children}: Props) => { // ts에서 됨3
export const DefaultLayout: FC<{ children: ReactNode; }> = (props) => {// ts에서 됨4 FC사용
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/*todo theme provider로 테마 색깔 바꿔보기*/}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            devlog
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div>hi children
        <Button variant="contained">hi</Button>
        <div>
          {/*{children}*/}
          {props.children}
        </div>
      </div>
    </Box>
  )

}

export default DefaultLayout;
