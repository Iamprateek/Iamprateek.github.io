import React from 'react';
import { Typography, Box } from '@mui/material';

const experiences = [
  {
    title: 'Software Engineer III, WALMART (Jan 2022 – Present)',
    details: [
      'Developed technology agnostic Http Kafka Sink Connector that provides order guarantees within Kafka partition, handling exponential backoff and DLQ of poison pills.',
      'Developed provisioning microservice to enable user to deploy, configure for MPS service.',
      'Collaborated with cross-functional teams to implement new features.',
      // More details...
    ],
  },
  {
    title: 'Senior Associate Platform Level 1, PUBLICIS SAPIENT (Jan 2020 – Jan 2022)',
    details: [
      'Designed and implemented Big Data solutions over the cloud with the objective of reporting, campaigning, and analytics.',
      // More details...
    ],
  },
  // Additional experiences...
];

const Experience = () => (
  <Box mt={4}>
    <Typography variant="h5" gutterBottom>Experience</Typography>
    {experiences.map((exp, index) => (
      <Box key={index} mb={2}>
        <Typography variant="h6">{exp.title}</Typography>
        {exp.details.map((detail, i) => (
          <Typography key={i} variant="body2">- {detail}</Typography>
        ))}
      </Box>
    ))}
  </Box>
);

export default Experience;
