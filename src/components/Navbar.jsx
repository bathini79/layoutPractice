import styled from '@emotion/styled'
import { Pets } from '@mui/icons-material'
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
const Search = styled("div")(({theme})=>({
backgroundColor:"white",
padding: "0 10px",
borderRadius:"4px",
width:"40%"
}))
const Icons = styled(Box)(({theme})=>({
    backgroundColor:"white"
}))
function Navbar() {
  return (
    <AppBar position='static'>
        <StyledToolbar>
           <Typography variant='h6' sx={{display:{
            xs:"none",
            sm:"block"
           }}}>Lama Dev</Typography>
            <Pets sx={{display:{
                xs:"block",
                sm:"none"
            }}}/>
            <Search > <InputBase placeholder='search...' /> </Search>
            <Icons>Search</Icons>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar