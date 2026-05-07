import React, { useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    setStatus('sending');

    
    const webhookUrl = "https://discord.com/api/webhooks/1502053985035751445/a-YCbKzplTwAZ8Bf43QFV4lLF2xwZvmbLZw45T6vqUbOI74qvLLysgUH35N_Q1L5Cqqo"; 

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Discord requires the key to be exactly "content"
        body: JSON.stringify({ content: message }), 
      });

      if (response.ok) {
        setStatus('success');
        setMessage(''); // Clear the input
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        placeholder="Enter a message here:"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={status === 'sending'}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button 
        type="submit" 
        disabled={status === 'sending'}
        style={{ padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
      >
        {status === 'sending' ? 'Sending...' : 'Submit'}
      </button>
      
      {status === 'success' && <span style={{ color: 'green' }}>Sent!</span>}
      {status === 'error' && <span style={{ color: 'red' }}>Failed to send.</span>}
    </form>
  );
};

export default ContactForm;