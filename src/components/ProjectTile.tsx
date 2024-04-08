import { Button, Typography, Link, Card, CardContent, CardActions, Chip } from '@mui/material';
import { ProjectProps } from '../common/types';

export const ProjectTile = ({ title, description, link, code, tech }: ProjectProps) => {
  return (
    <Card elevation={8} sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <CardContent sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <Typography variant="h5" component="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            {description}
          </Typography>
        </div>
        <div style={{
          marginTop: '8px',
          display: "flex",
          flexWrap: "wrap-reverse",
          gap: '8px',
        }}>
          {tech.map((technology, index) => (
            <Chip key={index} label={technology} />
          ))}
        </div>
      </CardContent>
      <CardActions
        sx={{
          mt: 'auto',
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          href={link}
          target="_blank"
          // rel="noopener noreferrer"
          variant="contained"
          component={Link}
          color="primary"
        >
          Visit Site
        </Button>
        <Button
          href={code}
          target="_blank"
          component={Link}
          variant="outlined"
          color="primary"
        // sx={{ ml: 1 }}
        >
          View Code
        </Button>
      </CardActions>
    </Card>
  );
}
