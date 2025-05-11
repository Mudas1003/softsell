import React, { useEffect } from 'react';
import bgImage from './assets/bg.jpg'; // Replace with your image path
import ChatWidget from './chatgpt.jsx';

const Home = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const styles = {
    container: {
      position: 'relative',
      height: '600px',
      width: '1320px',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      marginLeft: '-36px',
      marginTop: '-32px',
      fontFamily: 'Montaga',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      padding: '50px 40px',
      borderRadius: '16px',
      textAlign: 'center',
      color: '#fff',
      maxWidth: '1150px',
      width: '100%',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    title: {
      fontSize: '3.2rem',
      marginBottom: '20px',
      color: '#ffffff',
      lineHeight: '1.2',
      fontWeight: '600'
    },
    subtitle: {
      fontSize: '1.4rem',
      marginBottom: '30px',
      color: '#e2e8f0',
    },
    button: {
      fontSize: '1.1rem',
      padding: '14px 30px',
      backgroundColor: '#06402b',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      animation: 'pulse 2s infinite',
      transition: 'background-color 0.3s',
    },
    logo: {
      position: 'absolute',
      top: '20px',
      left: '30px',
      width: '60px',
      height: '60px',
      borderRadius: '15px',
      background: 'linear-gradient(145deg, #222, #000)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      boxShadow: '4px 4px 15px rgba(0,0,0,0.6), inset -3px -3px 8px rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.15)',
      fontFamily: 'monospace',
      letterSpacing: '1px',
    },
  };

  return (
    <>
    <ChatWidget />
    <div style={styles.container}>
      <div style={styles.logo}>SS</div>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Turn Your Unused Software Licenses Into Profit</h1>
        <p style={styles.subtitle}>
          SoftSell helps you resell extra software licenses in 3 simple steps and get paid instantly.
        </p>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#06402b')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#10b981')}
        >
          Sell My Licenses
        </button>
      </div>
    </div>
    </>
  );
};

export default Home;
