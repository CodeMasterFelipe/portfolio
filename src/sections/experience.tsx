import { Container, Typography } from "@mui/material";
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator } from "@mui/lab"

const experiences = [
  {
    title: "Software Engineer Principal Instructor",
    company: "TalentSprint",
    description: `-\tResponsible for the curriculum design, crafting, and teaching of the 18 months software engineering program for colleges in underrepresented communities, in the US and India.
-\tTraining students in full stack programming best practices, with the objective of getting into big tech companies.
`,
    duration: "Mar 2022 - Present"
  },
  {
    title: "Software Engineer/Architect",
    company: "Self-Employed",
    description: `-\tDeveloped and maintained a full-stack application that helped students in underrepresented communities to get into big tech companies.`,
    duration: "May 2019 - Present",
  },
  {
    title: "Software Engineer Intern",
    company: "Innovative Startup",
    description: "Assisted in the development of a new project management software, which increased team productivity by 20%.",
    duration: "May 2018 - Dec 2019"
  },
  // Add more experiences as needed
];

export const Experience = () => {
  return (
    <Container maxWidth="md" id="experience">
      <Typography variant="h4" component="h2" gutterBottom>
        Experience
      </Typography>
      <Timeline position="alternate">
        {experiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h3" >
                {experience.title}
              </Typography>
              <Typography variant="subtitle1" component="p" color="textSecondary">
                @ {experience.company}
              </Typography>
              <Typography variant="body1" component="p">
                {experience.description}
              </Typography>
              <Typography variant="body2" component="p" color="textSecondary">
                {experience.duration}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  )
}
