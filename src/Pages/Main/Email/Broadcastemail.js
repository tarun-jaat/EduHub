import React, { useState } from 'react';
import axios from 'axios';

const Broadcastemail = () => {
  const [recipients, setRecipients] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleBroadcastEmail = async () => {
    try {
      const recipientsArray = recipients.split(',').map(email => email.trim());
      if (recipientsArray.length === 0) {
        alert('Please enter valid recipients');
        return;
      }

      await axios.post('http://localhost:4000/api/v1/email/broadcastemail', { recipients: recipientsArray, subject, body });
      alert('Emails sent successfully');
      // Clear form fields after sending emails
      setRecipients('');
      setSubject('');
      setBody('');
    } catch (error) {
      console.error('Error broadcasting email:', error);
      alert('Failed to send emails');
    }
  };

  return (
    <div>
      <h2>Email Broadcasting</h2>
      <label>Recipients (comma-separated):</label>
      <input
        type="text"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
      />
      <label>Subject:</label>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <label>body:</label>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button onClick={handleBroadcastEmail}>Send Emails</button>
    </div>
  );
};

export default Broadcastemail;
