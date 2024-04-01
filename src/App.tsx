import { Box, CssBaseline, Paper, ThemeProvider } from '@mui/material'
import './App.css'
import { Home } from './sections/Home'
import { Projects } from './sections/Projects'
import { theme } from './theme'
import { Experience } from './sections/experience'
import { ScrollIndicator } from './components/ScrollIndicator'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const ContentContainer = ({ children }: { children: React.ReactNode }) => (
  <Paper id='content-container'>
    <ScrollIndicator />
    <Box sx={{ p: 3, pt: 6 }}>
      {children}
    </Box>
  </Paper>
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <ContentContainer>
        <Projects />
        <Box sx={{ height: '50px' }} />
        <Experience />
        <Box sx={{ height: '50vh' }} />
      </ContentContainer>
    </ThemeProvider>
  )
}

export default App
