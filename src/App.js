import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ChatBox from './components/ChatBox';

const App = () => (
  <>
    <Header />
    <Container maxWidth="md">
      <Box my={4}>
        <About />
        <Experience />
        <Skills />
        {/* <ChatBox /> */}
      </Box>
    </Container>
  </>
);

export default App;
