import * as React from 'react';
import {Project} from "../../models/Project";
import './ProjectCard.scss'
import {FaGithub, FaLink} from "react-icons/fa"
import TechIcon from "./TechIcon";
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";

// TODO implement carousel in case tech icons overflow

function ProjectCard(project: Project) {

    function urlIcon(url?: string): JSX.Element | undefined {
        if (url) {
            if (url.includes("github")) {
                return (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="icon-color">
                        <FaGithub size={20} />
                    </a>
                );
            } else {
                return (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="icon-color">
                        <FaLink size={16}/>
                    </a>
                );
            }
        }
    }

    return (
        <></>
        // <Card className="projects-card">  {/* width subject to change */}
        //     <Card.Header>
        //         <div className="d-flex align-items-center">
        //             <div style={{flexGrow: 1}}>
        //                 <h5>{project.title}</h5> {/* The title of the card */}
        //             </div>
        //             {
        //                 urlIcon(project.url)
        //             }
        //         </div>
        //     </Card.Header>
        //
        //     <Card.Body>
        //         <Card.Title>{project.description}</Card.Title>
        //         <Card.Text>
        //             <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-preview">
        //                 {project.content}
        //             </ReactMarkdown>
        //         </Card.Text>
        //     </Card.Body>
        //
        //     <Card.Footer className="d-flex">
        //         <div className="tech-icons">
        //             {project.technologies.map((tech, index) =>
        //                 <TechIcon size={24} icon={tech} tooltip={tech} key={index}/>
        //             )}
        //         </div>
        //     </Card.Footer>
        // </Card>
    );
}

export default ProjectCard;