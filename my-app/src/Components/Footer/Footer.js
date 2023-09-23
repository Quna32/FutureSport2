import React from 'react';

function Footer() {
  return (
    <div data-testid="footer">
      <footer className="bottom-container">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Connect with us</h3>
            <a className="footer-link" href="https://www.facebook.com/" data-testid="facebook-link">Facebook</a>
            <a className="footer-link" href="https://twitter.com/" data-testid="twitter-link">Twitter</a>
            <a className="footer-link" href="https://www.instagram.com/" data-testid="instagram-link">Instagram</a>
            <a className="footer-link" href="" data-testid="careers-link">Careers</a>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <a className="footer-link" href="" data-testid="faqs-link">FAQs</a>
            <a className="footer-link" href="" data-testid="contact-link">Contact Us</a>
          </div>
          <div className="footer-column">
            <h3>Account</h3>
            <a className="footer-link" href="" data-testid="forgot-password-link">Forgot Password</a>
            <a className="footer-link" href="" data-testid="privacy-policy-link">Privacy Policy</a>
            <a className="footer-link" href="" data-testid="terms-and-conditions-link">Terms and Conditions</a>
          </div>
        </div>
        <p className="copyright" data-testid="copyright-text">© FutureSports 2023</p>
      </footer>
    </div>
  );
}

export default Footer;
