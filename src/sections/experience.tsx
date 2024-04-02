import { Container, Typography, useMediaQuery } from "@mui/material";
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator, timelineItemClasses } from "@mui/lab"

const experiences = [
  {
    title: "Software Engineer Principal Instructor",
    company: "TalentSprint",
    description: [
      `Designed and delivered an 18-month software engineering curriculum for students in underrepresented communities in the US and India, \
       focusing on full stack programming and preparation for careers in big tech.`,
      `Enhanced student understanding and practical application of software development principles, \
       contributing to their successful entry into the technology sector.`
    ],
    duration: "Mar 2022 - Present"
  },
  {
    title: "Software Engineer/Architect",
    company: "Self-Employed",
    description: [
      `Developed a high-performance software platform for cryptocurrency day trading, \
       employing real-time machine learning for risk reduction and return maximization.`,
      `Achieved a 77% accuracy rate in trade predictions, resulting in up to 20% returns through the implementation of robust, \
       scalable architecture and continuous integration/deployment pipelines.`,
      `Technologies used: Python, Java, JavaScript, TensorFlow, Sklearn, Flutter, NoSQL/SQL, GCP/AWS, Kubernetes.`
    ],
    duration: "May 2019 - Present",
  },
  {
    title: "TA/Substitute Instructor",
    company: "2U Inc.",
    description: [
      `Provided comprehensive support in programming, data analysis, and project development, facilitating a collaborative and interactive learning environment.`,
      `Conducted code reviews and debugging sessions, ensuring students acquired necessary technical skills and knowledge.`
    ],
    duration: "Feb 2019 - Sep 2022"
  },
  // Add more experiences as needed
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
