import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center bg-danger text-white py-3 mt-5" style={styles.footer}>
      <div>
        <p style={styles.text}>&copy; {new Date().getFullYear()} CarBay. All Rights Reserved.</p>
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    borderTop: '2px solid #fff',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
  },
  text: {
    margin: '0 0 10px',
    fontSize: '1rem',
    fontWeight: '500',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px',
  },
  icon: {
    color: '#fff',
    fontSize: '1.2rem',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

export default Footer;
