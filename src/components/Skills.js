import React from 'react';
import { Typography, Box } from '@mui/material';

const skills = [
  'Programming Languages: Scala, Java, Python',
  'Big Data and Cloud Platforms: Snowflake, HDFS, Amazon S3...',
  // Additional skills...
];

const Skills = () => (
  <Box mt={4}>
    <Typography variant="h5" gutterBottom>Skills & Abilities</Typography>
    {skills.map((skill, index) => (
      <Typography key={index} variant="body1">{skill}</Typography>
    ))}
  </Box>
);

export default Skills;
