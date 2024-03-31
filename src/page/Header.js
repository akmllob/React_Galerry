import React from "react";
import { Link } from "react-router-dom";

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const styles = {
  navbar: {
    justifyContent: "center ",
    width: "100%",
    margin: "auto",
    display: "flex",
    lineHeight: "80px",
    position: "sticky",
    top: "0",
    background: "#EADBC8",
    zIndex: "100",
    fontFamily: "Poppins, sans-serif", 
  },
  logo: {
    fontFamily: "Poppins, sans-serif", 
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#333",
  },
  navLinks: {
    display: "flex",
    gap: "50px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif", 
  },
};

class Header extends React.Component {
  render() {
    return (
      <div style={styles.navbar}>
        
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>
            Beranda
          </Link>
          <Link to="/Aboutme" style={styles.link}>
            Tentang Saya
          </Link>
          <Link to="/Kreatif" style={styles.link}>
            Karya
          </Link>
          <Link to="/Contact" style={styles.link}>
            Kontak
          </Link>
          <Link to="/Galerry" style={styles.link}>
            Galerry
          </Link>
          <Link to="/Cart" style={styles.link}>
            Card
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
