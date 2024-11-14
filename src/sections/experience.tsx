import { Container, Typography, useMediaQuery } from "@mui/material";
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator, timelineItemClasses } from "@mui/lab"

const experiences = [
  {
    title: "Principal Software Engineering Instructor",
    company: "TalentSprint",
    description: [
      "Created and led an 18-month curriculum in software engineering, covering backend development, machine learning, and scalable cloud architectures for students in the US and India.",
      "Helped over 400 students build careers in tech by teaching practical, industry-ready skills, with a 20% placement rate in big tech. Awarded 'The Spotlight Award' for my impact on curriculum quality and student success."
    ],
    duration: "Mar 2022 - Present"
  },
  {
    title: "Software Engineer & Architect",
    company: "Freelance",
    description: [
      "Built an end-to-end AI platform for cryptocurrency trading that reduced trading risk by 30% and improved returns by 20% using real-time machine learning models.",
      "Achieved 77% prediction accuracy and a scalable system architecture with Kubernetes and Docker, maintaining 99.9% uptime while processing millions of trades daily.",
      "Tech stack: Python, Java, TensorFlow, Docker, Kubernetes, GCP/AWS, and custom ARM SoC hardware."
    ],
    duration: "May 2019 - Present"
  },
  {
    title: "Teaching Assistant / Instructor",
    company: "2U Inc.",
    description: [
      "Supported over 200 students in programming and data analytics, providing hands-on help with projects, debugging, and code reviews to boost their confidence and technical skills.",
      "Led classes and one-on-one sessions, achieving a 90% course completion rate and high student satisfaction."
    ],
    duration: "Feb 2019 - Sep 2022"
  }
];

export const Experience = () => {

  const isSmallScreen = useMediaQuery('(max-width:900px)')
  return (
    <Container maxWidth="md" id="experience">
      <Typography variant="h2" gutterBottom>
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
              <TimelineDot color="primary" />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h3" >
                {experience.title}
              </Typography>
              <Typography variant="subtitle1" component="p" color="textSecondary">
                @ {experience.company}
              </Typography>
              <ul>
                {experience.description.map((desc, index) => (
                  <Typography variant="body1" component="li" key={index}
                    sx={{
                      textAlign: 'left',
                    }}
                  >
                    {desc}
                  </Typography>
                ))}
              </ul>
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
