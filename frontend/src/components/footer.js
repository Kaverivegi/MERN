import React from 'react';
import './footer.css'; // Assuming you have a styles.css file for your CSS

function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <p>&copy; 2024 Company Name. All Rights Reserved.</p>
            </div>
            <div className="footer-right">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </footer>
    );
}

export default Footer;
