import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="footer fixed-bottom bg-light py-3">
            <div className="container text-center">
                <span className="text-muted">&copy; robertswider all rights reserved</span>
                <a href="https://github.com/joannakocinska" className="btn btn-primary ms-2" target="_blank" rel="noopener noreferrer">Moje portfolio</a>
            </div>
        </footer>
    );
}

export default Footer;
