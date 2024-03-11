import * as React from 'react';
import {Project} from "../../models/Project";
import {Badge, Card} from "react-bootstrap";
import './ProjectCard.scss'
import {SiGithub, SiLinkedin, SiReact, SiMaterialdesign, SiTypescript, SiJavascript} from "react-icons/si"
import {FaLink} from "react-icons/fa"
import TechIcon from "./TechIcon";

function ProjectCard({title, shortDescription, description, technologies}: Project) {

    return (
        <Card className="projects-card">  {/* width subject to change */}
            <Card.Header>
                <div>
                    <SiGithub size={32}/> {/* Display your top left icon here */}
                </div>
                <div className="d-flex align-items-center">
                    <div style={{flexGrow: 1}}>
                        <h5>{title}</h5> {/* The title of the card */}
                    </div>
                    <FaLink size={16}/> {/* URL Icon */}
                </div>
            </Card.Header>

            <Card.Body>
                <Card.Title>{shortDescription}</Card.Title>
                <Card.Text>{description}</Card.Text> {/* Description */}
            </Card.Body>

            <Card.Footer className="d-flex">
                <div className="tech-icons">
                    {technologies.map((tech, index) =>
                        <TechIcon size={16} icon={tech} tooltip={tech} key={index}/>
                    )}
                </div>
            </Card.Footer>
        </Card>
    );
}

export default ProjectCard;