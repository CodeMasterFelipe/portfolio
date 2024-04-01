import { Container, Typography, useMediaQuery, Theme } from "@mui/material";
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator, timelineItemClasses } from "@mui/lab"

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
    description: `Developed a software platform to reduce risk and increase returns in day trading of cryptocurrencies through the application of real-time machine learning techniques.
Implementing algorithms with an accuracy rate of 77%, generated trades as high as 20% in returns.
Developing and designing a scalable and robust architecture, deployed on a Kubernetes cluster, leveraging Kafka as the event orchestrator, with automatic CI/CD pipelines, to ensure seamless performance and reliability.
Utilize advanced technologies and tools, including Python, Java, javascript, TensorFlow, Sklearn, Flutter, NoSQL/SQL databases, and GCP/AWS/on-prem infrastructure
https://github.com/Strooper1234/Bybit-api (all I am able to share)`,
    duration: "May 2019 - Present",
  },
  {
    title: "TA/Substitute Instructor",
    company: "2U Inc.",
    description: `Assisted students with programming, data analysis, and project development.
Provided on-demand support: concept clarification, debugging, and code reviews.`,
    duration: "Feb 2019 - Sep 2022"
  },
  // Add more experiences as needed
];

export const Experience = () => {

  const isSmallScreen = useMediaQuery('(max-width:900px)')
  return (
    <Container maxWidth="md" id="experience">
      <Typography variant="h4" component="h2" gutterBottom>
        Experience
      </Typography>
      <Timeline
        position={isSmallScreen ? 'right' : "alternate"}
        sx={isSmallScreen ? {
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        } : {}}
      >
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
