import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box, CssBaseline, Paper, ThemeProvider } from '@mui/material'
import './App.css'
import { Home } from './sections/Home'
import { Projects } from './sections/Projects'
import { theme } from './theme'
import { Experience } from './sections/experience'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
        <Projects />
        <Experience />
    </ThemeProvider>
  )
}

export default App
