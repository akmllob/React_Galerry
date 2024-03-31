import React from 'react';
import { Link } from 'react-router-dom';
 
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Poppins, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '32px',
      marginBottom: '10px',
      color: '#333',
    },
    subtitle: {
      fontSize: '18px',
      color: '#666',
    },
    content: {
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    sectionContent: {
      fontSize: '16px',
      color: '#666',
    },
    gallery: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: "#EADBC8",
      color: '#black',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    footer: {
      textAlign: 'center',
      marginTop: '40px',
      borderTop: '1px solid #ccc',
      paddingTop: '20px',
    },
    footerText: {
      fontSize: '14px',
      color: '#666',
    },
  };

class MainPage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Selamat Datang di Portofolio Saya</h1>
          <p style={styles.subtitle}>Ini adalah halaman beranda dari portofolio saya</p>
        </header>
        <section style={styles.content}>
          <h2 style={styles.sectionTitle}>Tentang Saya</h2>
          <p style={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada, diam sit amet fermentum ultricies, felis metus placerat ligula, nec tempor justo felis in dui. Vestibulum scelerisque, nulla et ullamcorper efficitur, nisl nisi molestie lacus, ac lacinia elit ipsum id ipsum.
          </p>
        </section>
        <section style={styles.content}>
          <h2 style={styles.sectionTitle}>Karya Saya</h2>
          <div style={styles.gallery}>
            <Link to="/Kreatif" style={{ textDecoration: 'none' }}>
              <button style={styles.button}>Lihat Karya</button>
            </Link>
          </div>  
        </section>
        <section style={styles.content}>
          <h2 style={styles.sectionTitle}>Please Hire Me</h2>
          <div style={styles.gallery}>
            <Link to="/Contact" style={{ textDecoration: 'none' }}>
              <button style={styles.button}>Hubungi Saya</button>
            </Link>
          </div>
        </section>
        <footer style={styles.footer}>
          <p style={styles.footerText}>© 2023 Portofolio Saya</p>
        </footer>
      </div>
    );
  }
}

export default MainPage;
