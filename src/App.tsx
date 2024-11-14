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
import FluidSimulationComponent from './components/FluidSimulationComponent'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const ContentContainer = ({ children }: { children: React.ReactNode }) => (
  <Paper id='content-container' elevation={6} style={{ position: 'relative', zIndex: 200 }}>
    <ScrollIndicator />
    <Box sx={{ p: 0, pt: 6 }}>
      {children}
    </Box>
  </Paper>
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <FluidSimulationComponent />
      <ContentContainer>
        <Experience />
        <Box sx={{ height: '80px' }} />
        <Projects />
        <Box sx={{ height: '80px' }} />
      </ContentContainer>
    </ThemeProvider>
  )
}

export default App
