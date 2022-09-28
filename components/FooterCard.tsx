import React from 'react'
import { Box, Container, Typography } from "@mui/material";
interface IProps{
    text : string[]
}

function FooterCard({text}: IProps) {
  return (
    <Box sx={{
        width:{xs: 375, sm: 150},
        display:'flex',
        flexDirection:'column',
        justifyContent:{xs:'center', sm:'flex-start'},
        alignItems:'center',
        textAlign:{xs:'center'},
        flexWrap: { xs: "wrap" },
        gap:2,
      }}>
        <Typography fontWeight={700} variant="h6">{text[0]}</Typography>
        <Typography>{text[1]}</Typography>
        <Typography>{text[2]}</Typography>
        <Typography>{text[3]}</Typography>
    </Box>
  )
}

export default FooterCard