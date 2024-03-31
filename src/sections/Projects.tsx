import { Container, Stack, Typography } from "@mui/material"
import { ProjectTile } from "../components/ProjectTile"
const projects = [
  {
    title: "Project One",
    description: "This is a short description of my first project. It was built using React, Node.js, and MongoDB.",
    link: "https://example.com/project-one",
    code: "https://github.com/yourusername/project-one"
  },
  {
    title: "Project Two",
    description: "An overview of my second project, highlighting the use of TypeScript, GraphQL, and Apollo Client.",
    link: "https://example.com/project-two",
    code: "https://github.com/yourusername/project-two"
  },
  {
    title: "Project Three",
    description: "An overview of my second project, highlighting the use of TypeScript, GraphQL, and Apollo Client.",
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
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={4}>
        {projects.map((project, index) => (
          <ProjectTile key={index} {...project} />
        ))
        }
      </Stack>
    </Container>
  )
}
