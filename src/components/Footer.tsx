import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si"

function Footer() {
    return (
        <footer className="mt-auto py-3 border-top px-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <a href="https://github.com/Bernasss12" className="text-decoration-none" target="_blank"
                           rel="noopener noreferrer">
                            <SiGithub size={32} className='icon-color'/>
                        </a>
                        <a href="https://www.linkedin.com/in/bernardo-antunes-9151b818b/"
                           className="text-decoration-none ms-3"
                           target="_blank" rel="noopener noreferrer">
                            <SiLinkedin size={32} className='icon-color'/>                        </a>
                    </div>
                    <div className="col text-end">
                        <small className="text-muted">© 2024 Bernardo Antunes</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;