import { Container, Typography } from "@mui/material"
import { ProjectTile } from "../components/ProjectTile"
import Grid from '@mui/material/Unstable_Grid2'

const projects = [
    {
        title: "QuantFlow",
        description: "QuantFlow is a robust, event-driven Python framework for developing, backtesting, and executing quantitative trading strategies. It’s designed for modularity and scalability, enabling seamless transitions between backtesting and live trading with minimal code changes, providing a versatile tool for quantitative finance.",
        tech: ["Python", "Event-Driven Architecture", "Backtesting Framework"],
        link: "",
        code: "https://github.com/CodeMasterFelipe/QuantFlow"
    },
    {
        title: "Project Blue",
        description: "I engineered core components, including a SoC, radio telemetry, and GPS modules for high-altitude balloon systems, capturing near-space environmental data. Project Blue combines cutting-edge telemetry with robust data retrieval from near-space, showcasing my embedded systems expertise.",
        tech: ["Embedded Systems", "Telemetry", "GPS", "SoC"],
        link: "http://www.projectblue.org",
        code: ""
    },
    {
        title: "React Minimalist Portfolio",
        description: "Embracing minimalist design, I built this React-based portfolio to showcase my work without distractions. It’s a clean, purpose-driven site where every component contributes to an uncluttered, professional experience.",
        tech: ["React", "TypeScript", "Material-UI", "GSAP"],
        link: "",
        code: "https://github.com/CodeMasterFelipe/portfolio"
    },
    {
        title: "LLM Chat Agents",
        description: "Exploring advanced conversational AI, I developed LLM Chat Agents, a customizable chatbot framework featuring character-driven interactions and web-search capabilities. Each agent's unique personality and image-generation capabilities create a highly engaging chat experience, ideal for dynamic, information-rich conversations.",
        tech: ["Python", "ChatGPT API", "LLaMa", "SDXL"],
        link: "",
        code: "https://github.com/CodeMasterFelipe/streamlit-chatbot"
    },
    {
        title: "MacOS Tiling Window Manager",
        description: "To address MacOS’s limitations on ultra-wide monitors, I developed a hybrid tiling window manager, providing efficient and visually appealing workspace organization. Tailored for productivity, this tool optimizes digital workflows, especially for ultra-wide displays.",
        tech: ["Swift", "SwiftUI"],
        link: "",
        code: "https://github.com/CodeMasterFelipe/WinMan"
    },
    {
        title: "Java AI Genetic-Based Pathfinder",
        description: "Developed a proof of concept for an AI-driven pathfinding algorithm using genetic principles. This project applies mutation-based AI techniques to optimize navigation and showcases my interest in algorithmic problem-solving.",
        tech: ["Java", "Genetic Algorithm", "AI"],
        link: "https://youtu.be/s9z_VlhB_ac",
        code: ""
    },
    {
        title: "Java AI Mutational Genetic Algorithm (Pong AI)",
        description: "This arcade-inspired project uses a mutational genetic algorithm to enhance AI gameplay, applying adaptive techniques for learning and strategy development in a simulated Pong environment.",
        tech: ["Java", "Genetic Algorithm", "Machine Learning"],
        link: "https://youtu.be/vDqbHNkjv3A",
        code: ""
    }
];

export const Projects = () => {
    return (
        <Container maxWidth="lg" id="projects">
            <Typography variant="h2" gutterBottom>
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
