import { Box, Typography, Container } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Home = () => {

  useGSAP(() => {
    gsap.to('#home', {
      scrollTrigger: {
        // trigger: '#home',
        trigger: 'body',
        start: 'top top',
        endTrigger: '#scroll-indicator',
        // end: 'bottom center',
        // markers: true,
        snap: {
          snapTo: [0, 1],
          directional: true,
          duration: { min: 0.5, max: 1 },
          delay: 0,
        },
      },
    })
  })

  return (
    <Container maxWidth="md" id="home">
      <Box sx={{
        height: '92vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'start',
      }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Felipe Rivera
        </Typography>
        <Typography variant="h6" component="p" color="textSecondary" >
          Full Stack Developer - Diving deep into backend development, I'm all about crafting the next generation of scalable, efficient, and delightful software solutions
        </Typography>
      </Box>
    </Container>
  );
}
