import { Box, CssBaseline, Paper, ThemeProvider } from '@mui/material'
import './App.css'
import { Home } from './sections/Home'
import { Projects } from './sections/Projects'
import { theme } from './theme'
import { Experience } from './sections/experience'

const ContentContainer = ({ children }: { children: React.ReactNode }) => (
  <Paper>
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
      </ContentContainer>
    </ThemeProvider>
  )
}

export default App
