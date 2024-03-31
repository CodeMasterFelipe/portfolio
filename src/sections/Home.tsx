import { Box, Typography, Container } from '@mui/material';

export const Home = () => {
  return (
    <Container maxWidth="md">
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
