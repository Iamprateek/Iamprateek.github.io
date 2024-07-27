import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar>
      <Container maxWidth="md">
        <Typography variant="h4" align="center">
          Prateek S Dave
        </Typography>
        <Typography variant="subtitle1" align="center">
        Bengaluru, India | prateeksdave@gmail.com
        </Typography>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Header;
