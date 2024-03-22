import React from "react";
import {SiGithub, SiLinkedin} from "react-icons/si"

// TODO add line separating footer from content

function Footer() {
    return (
        <footer className="flex flex-row items-center justify-between m-2 px-4 py-2 bg-white bg-opacity-5 text-tertiary rounded">
                <div className="flex flex-row items-center justify-between">
                    <a href="https://github.com/Bernasss12"
                       target="_blank"
                       rel="noopener noreferrer">
                        <SiGithub size={24}/>
                    </a>
                    <a href="https://www.linkedin.com/in/bernardo-antunes-9151b818b/"
                       className="ml-3"
                       target="_blank"
                       rel="noopener noreferrer">
                        <SiLinkedin size={24}/>
                    </a>
                </div>
                <div className="center">
                    <small className="opacity-80">
                        © 2024 Bernardo Antunes
                    </small>
                </div>
        </footer>
    );
}

export default Footer;