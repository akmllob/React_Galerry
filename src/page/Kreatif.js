import React from 'react';
import { Link } from 'react-router-dom';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center',
  fontFamily: "Poppins, sans-serif"
};

const styles = {

textStyle: {
  fontSize: '24px',
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

};

class Kreatif extends React.Component {
  render() {
    return (
      <div style={containerStyle}>
        <p style={styles.textStyle}>Selamat datang di halaman karya saya</p>
        <p style={styles.textStyle}>Sayangnya halaman ini sedang dalam tahap pengembangan</p>
        <p style={styles.textStyle}>Anda bisa menuju halaman lainnya</p>
        <div style={styles.gallery}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <button style={styles.button}>Halaman Beranda</button>
            </Link>
          </div>  
      </div>
    );
  }
}

export default Kreatif;
