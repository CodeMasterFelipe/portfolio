import { Box, Typography, Container } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const bio = `a Software Engineer and Tech Educator from Seattle, where the coffee is strong and the code is stronger. \
            Fuled by a cup of the finest brew, I craft innovative software solutions and mentor the next generation of tech wizards. \
            Ready for a caffeine-fueled coding adventure? Let's connect!`;

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
          {bio}
        </Typography>
      </Box>
    </Container>
  );
}
