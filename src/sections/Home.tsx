import { Box, Typography, Container } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const bio = `Seattle-based Software Engineer and Tech Mentor, crafting high-performance AI and scalable solutions. \
            I push limits, empower the next wave of tech talent, and thrive on a good coding challenge. Ready for a caffeine-fueled conding adventure? Let's connect!`;

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
        <Container maxWidth="xl" id="home" style={{ position: 'relative', zIndex: 200 }}>
            <Box sx={{
                height: '92vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
            }}>
                <Typography variant="h1" component="h1" gutterBottom
                    sx={{
                        fontWeight: 200,
                        fontSize: { xs: '5rem', sm: '6rem', lg: '8rem' },
                    }}
                >
                    Felipe Rivera
                </Typography>
                <Typography variant="h6" component="p" >
                    {bio}
                </Typography>
            </Box>
        </Container>
    );
}
