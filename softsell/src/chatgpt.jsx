import React, { useState } from 'react';
import axios from 'axios';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me anything about selling software licenses.' }
  ]);
  const [input, setInput] = useState('');

  const exampleQuestions = [
    'How do I sell my license?',
    'What types of software can I sell?',
    'How does SoftSell work?',
  ];

  const sendMessage = async (text) => {
    const userMessage = { from: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: text }],
          max_tokens: 100,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const reply = res.data.choices[0].message.content.trim();
      setMessages((prev) => [...prev, { from: 'bot', text: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: "Sorry, I'm having trouble answering that right now." }
      ]);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          backgroundColor: '#06402b',
          color: '#fff',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 999,
        }}
      >
        💬
      </div>

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          width: '320px',
          maxHeight: '480px',
          backgroundColor: '#1f2937',
          color: '#fff',
          borderRadius: '12px',
          padding: '15px',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 998,
        }}>
          <div style={{ flexGrow: 1, overflowY: 'auto', marginBottom: '10px' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: msg.from === 'user' ? '#10b981' : '#374151',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  margin: '5px 0',
                  alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '10px' }}>
            {exampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(q)}
                style={{
                  backgroundColor: '#4b5563',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '5px 10px',
                  fontSize: '0.8rem',
                  marginRight: '6px',
                  marginBottom: '6px',
                  cursor: 'pointer'
                }}
              >
                {q}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) sendMessage(input);
          }} style={{ display: 'flex' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              style={{
                flex: 1,
                padding: '8px',
                borderRadius: '8px 0 0 8px',
                border: 'none',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#10b981',
                border: 'none',
                borderRadius: '0 8px 8px 0',
                color: '#fff',
                padding: '8px 12px',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
