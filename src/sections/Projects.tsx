import { Container, Typography } from "@mui/material"
import { ProjectTile } from "../components/ProjectTile"
import Grid from '@mui/material/Unstable_Grid2'

const projects = [
  {
    title: "LLM Chat Agents",
    description: "Inspired by my ever-present fascination with machine learning and intelligent systems, I ventured into the world of chatbots. \
      The result? LLM Chat Agents: a customizable, engaging chat experience with a variety of characters to interact with. Not stopping there, \
      I infused creativity by allowing users to generate unique images for each character's profile. These smart agents aren't just about conversations; \
      they're also web-savvy, capable of fetching information across the internet. Dive into a chat like no other—where your conversational partner is \
      only limited by your imagination.",
    tech: ["Python", "ChatGPT API", "LLaMa", "SDXL", "..."],
    link: "",
    code: ""
  },
  {
    title: "MacOS Tiling Window Manager",
    description: "Frustrated with MacOS's lackluster window management and determined to optimize my ultra-wide 32:9 monitor setup, \
      I engineered a solution: a hybrid tiling window manager for MacOS. This project not only elevates productivity but also introduces a sleek, \
      efficient way to organize your digital workspace. It's the window management Mac enthusiasts have been dreaming of \
      —because your workspace should work as hard as you do.",
    tech: ["Swift", "SwiftUI"],
    link: "",
    code: "https://github.com/CodeMasterFelipe/WinMan"
  },
  {
    title: "React  M inimalist Portfolio",
    description: "Embracing the elegance of simplicity, I decided it was time to craft a digital space that emodies what I stand for. \
      Enter my React-based Minimalist Portfolio: a clean, straightforward website that showcases my capabilities without the clutter. \
      Guided by the principles of minimalism, this project is a testament to the beauty of simplicity in design. \
      Explore my world, where every pixel serves a purpose.",
    tech: ["React", "TypeScript", "Material-UI", "GSAP"],
    link: "",
    code: "https://github.com/CodeMasterFelipe/portfolio"
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
