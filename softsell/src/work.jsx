import React, { useEffect, useState, useRef } from 'react';
import uploadIcon from './assets/upload.png';
import valuationIcon from './assets/valuation.png';
import paymentIcon from './assets/payment.png';

const HowItWorks = () => {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  // Inject keyframe animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInLeft {
        0% { transform: translateX(-100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes fadeInRight {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes popIn {
        0% { transform: scale(0); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Show animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      backgroundColor: '#0f172a',
      padding: '60px 20px',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1320px',
      marginLeft: '-35px',
    },
    title: {
      fontSize: '3.8rem',
      marginBottom: '10px',
      fontFamily: 'Monataga',
    },
    description: {
      fontSize: '1.5rem',
      color: '#cbd5e1',
      textAlign: 'center',
      marginBottom: '60px',
      fontFamily: 'Monataga',

    },
    cards: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '35px',
    },
    card: (index) => ({
      width: '300px',
      height: '300px',
      borderRadius: '16px',
      backgroundColor: '#1e293b',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      transition: 'transform 0.4s ease, filter 0.4s ease',
      animation:
        visible && index === 0
          ? 'fadeInLeft 1s ease'
          : visible && index === 1
          ? 'popIn 1s ease'
          : visible && index === 2
          ? 'fadeInRight 1s ease'
          : 'none',
      filter: hovered !== null && hovered !== index ? 'blur(4px)' : 'none',
      transform:
        hovered !== null && hovered !== index
          ? 'scale(0.9)'
          : hovered === index
          ? 'scale(1.05)'
          : 'scale(1)',
      zIndex: hovered === index ? 2 : 1,
      cursor: 'pointer',
      overflow: 'hidden',
      padding: '20px',
      textAlign: 'center',  // Ensures the content inside the card is centered horizontally
    }),
    icon: (hoveredThis) => ({
      width: '60px',
      marginBottom: hoveredThis ? '20px' : '10px',
      transition: 'all 0.3s ease',
      transform: hoveredThis ? 'translateY(-10px)' : 'translateY(0)',
    }),
    label: (hoveredThis) => ({
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: hoveredThis ? '15px' : '-20px',
      transform: hoveredThis ? 'translateY(-5px)' : 'translateY(0)',
      transition: 'all 0.3s ease',
    }),
    revealText: {
      fontSize: '0.95rem',
      color: '#cbd5e1',
      textAlign: 'center',
      opacity: 0,
      transform: 'translateY(10px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
    },
    revealTextVisible: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  };

  const cardsData = [
    {
      icon: uploadIcon,
      label: 'Upload License',
      description: 'Upload your unused software license for resale.',
    },
    {
      icon: valuationIcon,
      label: 'Get Valuation',
      description: 'We evaluate your license and determine its value.',
    },
    {
      icon: paymentIcon,
      label: 'Get Paid',
      description: 'Receive quick payment for your license.',
    },
  ];

  return (
    <section style={styles.section} ref={sectionRef}>
      <h2 style={styles.title}>How It Works</h2>
      <p style={styles.description}>
        Learn about the simple and seamless process to get paid for your unused software licenses.
      </p>
      <div style={styles.cards}>
        {cardsData.map((card, index) => {
          const isHovered = hovered === index;
          return (
            <div
              key={index}
              style={styles.card(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={card.icon} alt={card.label} style={styles.icon(isHovered)} />
              <div style={styles.label(isHovered)}>{card.label}</div>
              <div
                style={{
                  ...styles.revealText,
                  ...(isHovered ? styles.revealTextVisible : {}),
                }}
              >
                {card.description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
