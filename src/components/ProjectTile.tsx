import { Button, Typography, Link, Card, CardContent, CardActions, CardActionArea } from '@mui/material';
import { ProjectProps } from '../common/types';

export const ProjectTile = ({ title, description, link, code, image }: ProjectProps) => {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <CardActionArea>
        <CardContent>

          <Typography variant="h5" component="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
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
