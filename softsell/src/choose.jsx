import React, { useEffect, useState } from 'react';
import fastIcon from './assets/fast.png'; // Example icon for fast service
import reliableIcon from './assets/reliable.png'; // Example icon for reliability
import supportIcon from './assets/support.png'; // Example icon for customer support
import secureIcon from './assets/secure.png'; // Example icon for security
import './App.css'; // or './styles.css' depending on your file name


const WhyChooseUs = () => {
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const sectionTop = document.getElementById('why-choose-us')?.getBoundingClientRect().top;
    if (sectionTop <= window.innerHeight) {
      console.log("Section is in view!");
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    section: {
      backgroundColor: '#064e3b', // Dark green background
      padding: '60px 20px',
      color: '#f8fafc', // Light text color for contrast
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '1320px',
      marginLeft: '-35px', // Ensure the section takes up enough height to scroll
    },
    title: {
      fontSize: '3.8rem',
      marginBottom: '20px',
      marginTop: '-30px',
      fontFamily: 'Monatag',
      textAlign: 'center',
    },
    description: {
      fontSize: '1.5rem',
      color: 'white', // Light gray text
      textAlign: 'center',
      marginBottom: '60px',
      maxWidth: '800px',
    },
    tiles: {
      display: 'flex',
      justifyContent: 'center', // Center all cards horizontally
      alignItems: 'center', // Center cards vertically if necessary
      gap: '20px',
      width: '100%', // Ensure the tiles span the full width
      flexWrap: 'no-wrap', // Prevent wrapping of cards into multiple rows
    },
    tile: {
      fontFamily: 'Poppins',
      backgroundColor: '#ffffff',
      borderRadius: '120px',
      padding: '30px',
      width: '250px',
      height: '270px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', // Center content inside each tile
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      opacity: isInView ? 1 : 0, // Make tile visible only when section is in view
      transform: isInView ? 'translateY(0)' : 'translateY(30px)', // Slide in effect
      transition: 'all 0.6s ease-out', // Smooth transition for visibility and position
    },
    tileIcon: {
      width: '80px',
      height: '80px',
      marginBottom: '10px', // Reduced margin to decrease gap
      animation: 'breathing 2s infinite ease-in-out', // Breathing animation
    },
    tileTitle: {
      fontSize: '1.2rem',
      fontWeight: '500',
      marginBottom: '20px',
      textAlign: 'center',
      color: 'black',
      marginTop: '15px',
    },
    tileDescription: {
      fontSize: '0.9rem',
      color: 'black',
      textAlign: 'center',
    },
  };

  const tilesData = [
    {
      icon: fastIcon,
      title: 'Fast Service',
      description: 'We provide fast turnaround times for all services, ensuring your needs are met promptly.',
    },
    {
      icon: reliableIcon,
      title: 'Reliable',
      description: 'Our platform is built with reliability and trust at its core, ensuring a smooth experience.',
    },
    {
      icon: supportIcon,
      title: '24/7 Support',
      description: 'Our support team is available around the clock to assist with any inquiries or issues.',
    },
    {
      icon: secureIcon,
      title: 'Highly Secure',
      description: 'Your data and transactions are protected by advanced security protocols and encryption.',
    },
  ];

  return (
    <>
      {/* Add keyframes here */}
      <style>
        {`
          @keyframes breathing {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.18);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
      <section id="why-choose-us" style={styles.section}>
        <h2 style={styles.title}>Why Choose Us</h2>
        <p style={styles.description}>
          Discover the top reasons why our service is the best choice for your needs.
        </p>
        <div style={styles.tiles}>
          {tilesData.map((tile, index) => (
            <div key={index} style={styles.tile}>
              <img src={tile.icon} alt={tile.title} style={styles.tileIcon} />
              <div style={styles.tileTitle}>{tile.title}</div>
              <div style={styles.tileDescription}>{tile.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
