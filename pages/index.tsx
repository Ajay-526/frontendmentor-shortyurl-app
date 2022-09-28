import { Box } from '@mui/material'
import React from 'react'
import Frontpage from './Frontpage'
import MainContent from '../components/MainContent'
import CardContent from '../components/CardContent'
import GetStartedContent from '../components/GetStartedContent'
import Footer from '../components/Footer'
function Index() {
  return (
    <Box>
        <Frontpage/>
        <MainContent/>
        <CardContent/>
        <GetStartedContent/>
        <Footer/>
    </Box>
  )}

export default Index