import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const ChatBox = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    const response = "This is a mock response to your query.";
    setMessages([...messages, { query, response }]);
    setQuery('');
  };

  return (
    <Box>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={msg.query} secondary={msg.response} />
          </ListItem>
        ))}
      </List>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        label="Ask a question"
        fullWidth
      />
      <Button onClick={handleSend} variant="contained" color="primary">
        Send
      </Button>
    </Box>
  );
};

export default ChatBox;
