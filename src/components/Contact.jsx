import { Box, Container, TextField, Typography, Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

// For Notification popup
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact({ isSmallScreen }) {
  const emailjs_token = import.meta.env.VITE_EMAILJS_PUBLIC_TOKEN;

  const [formData, setFormData] = useState({
    sender_name: '',
    sender_email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (event) => {
    event.preventDefault();

    // sending emails with emailjs API,
    emailjs
      .send('portfolio_service', 'portfolio_template', formData, emailjs_token)
      .then((response) => {
        toast.success('Email sent successfully!');
        console.log('Email sent successfully!', response.status, response.text);
        setFormData({
          sender_name: '',
          sender_email: '',
          message: '',
        });
      })
      .catch((error) => {
        toast.error('Failed to send email.');
        console.error('Failed to send email:', error);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <Box sx={{ mb: 3 }} id="contactForm">
        <Container
          sx={{
            marginY: isSmallScreen ? 2 : 5,
          }}
        >
          <Typography variant="repositoryDate">Contact me</Typography>
          <Box>
            <Typography sx={{ marginY: 1 }}>Name</Typography>
            <TextField
              size="small"
              type="text"
              name="sender_name"
              value={formData.sender_name}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Typography sx={{ marginY: 1 }}>Email</Typography>
            <TextField
              size="small"
              type="Email"
              name="sender_email"
              value={formData.sender_email}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Typography sx={{ marginY: 1 }}>Message</Typography>
            <TextField
              size="small"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              name="message"
              onChange={handleChange}
              value={formData.message}
            />
          </Box>
          <Button
            type="submit"
            target="_blank"
            variant="outlined"
            sx={{ mt: 1 }}
          >
            Send
          </Button>
        </Container>
        <ToastContainer />
      </Box>
    </form>
  );
}
