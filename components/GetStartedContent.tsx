import React from 'react'
import {Box, Typography, Button} from '@mui/material'
function GetStartedContent() {
  return (
    <Box sx={{
        height: 250,
        backgroundImage: 'url(https://raw.githubusercontent.com/Ajay-526/my-assets/f7c135b662ab4a019626c517135a22146aaf5c74/bg-boost-desktop.svg)',
        backgroundRepeat:'no-repeat',
        backgroundColor:'hsl(257, 27%, 26%)',
        color: 'white'
    }}>
        <Box sx={{
            height:250,
            display:'flex',
            flexDirection:'column',
            gap: 2,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Typography variant='h3' fontWeight={700} sx={{textAlign:{xs:'center'}}}>Boost Your Links Today.</Typography>
            <Button variant='contained' sx={{borderRadius:20, bgcolor:'hsl(180, 66%, 49%)'}}>Get Started</Button>
        </Box>
    </Box>
  )
}

export default GetStartedContent