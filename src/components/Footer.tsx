import React from "react";
import {SiGithub, SiLinkedin} from "react-icons/si"

// TODO add line separating footer from content

function Footer() {
    return (
        <footer>
            <div className="row p-x-4 p-b-2">
                <div className="center">
                    <a href="https://github.com/Bernasss12"
                       target="_blank"
                       rel="noopener noreferrer">
                        <SiGithub size={32} className='icon'/>
                    </a>
                    <a href="https://www.linkedin.com/in/bernardo-antunes-9151b818b/"
                       className="m-x-1"
                       target="_blank"
                       rel="noopener noreferrer">
                        <SiLinkedin size={32} className='icon'/>
                    </a>
                </div>
                <div className="center">
                    <small className="muted">
                        © 2024 Bernardo Antunes
                    </small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;