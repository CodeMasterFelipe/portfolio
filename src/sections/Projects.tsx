import { Container, Typography } from "@mui/material"
import { ProjectTile } from "../components/ProjectTile"
import Grid from '@mui/material/Unstable_Grid2'

const projects = [
  {
    title: "LLM Chat Agents",
    description: "As my interest in ML and smart system have existed always inside me, I dive deeper on making a useful chatbot. \
      It has different character that you can customize and talk to. I also created the option to generate images which can be created \
      for the profile of the different characters. The bots have the ability of also searching the web.",
    link: "https://example.com/project-one",
    code: "https://github.com/yourusername/project-one"
  },
  {
    title: "MacOS Tiling Window Manager",
    description: "MacOS is missing good window managment so I decided to create a hybrid tiling window managment that could benefit my 32:9 monitor.",
    link: "https://example.com/project-two",
    code: "https://github.com/yourusername/project-two"
  },
  {
    title: "React Minimalist Portfolio",
    description: "I finally decided to spend the time to build a website to showcase what I am capable of. \
      I love simplicity and minimalism and thus I make it guide me in the design of my portfolio.",
    link: "https://example.com/project-two",
    code: "https://github.com/yourusername/project-two"
  },
  // Add more projects as needed
];

export const Projects = () => {
  return (
    <Container maxWidth="lg" id="projects">
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid
        container
        // direction="row"
        // alignItems="center"
        // justifyContent="space-between"
        spacing={4}>
        {projects.map((project, index) => (
          <Grid xs={12} sm={12} md={4}>
            <ProjectTile key={index} {...project} />
          </Grid>
        ))
        }
      </Grid>
    </Container>
  )
}
