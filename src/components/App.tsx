import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/theme.scss'
import Footer from "./Footer";
import Header from "./Header";
import ProjectCard from "./project-card/ProjectCard";
import {Project} from "../models/Project";
import {BrowserRouter as Router} from "react-router-dom";

/*
  TODO Change tooltip style.
  TODO Center card footer icons vertically.
  TODO Maybe ditch the icon on the card and replace the link with the gh logo (when gh repo available)
 */

function App() {

    const projects: Project[] = [
        {
            title: 'React Project',
            url: '#',
            shortDescription: 'This is a short desc.',
            description: 'Phasellus tincidunt nulla vel ligula ornare suscipit. Sed varius urna sed nisi rhoncus bibendum. Phasellus ultrices, metus a rutrum consequat, enim diam posuere mauris, sed blandit felis ipsum ac risus. Donec nulla lectus, aliquam sed interdum ut, convallis vitae neque. Proin consectetur, neque ac tristique sodales, leo enim varius sem, ac condimentum risus lacus eu augue. Sed facilisis semper magna. Praesent vel risus ut turpis vulputate pulvinar ac id augue. Vestibulum non quam leo. Integer feugiat mauris in nunc cursus, et tincidunt nisl vestibulum. Vestibulum pulvinar augue est, nec bibendum mauris iaculis in.',
            technologies: ['React', 'JavaScript', 'MaterialDesign', 'LinkedIn', 'JavaScript']
        },
        {
            title: 'Azure Project',
            url: '#',
            shortDescription: 'This is a short desc.',
            description: 'Curabitur dignissim elementum ante, non finibus libero fringilla nec. Donec consequat est eget massa faucibus, non elementum est finibus. Maecenas consequat erat a abitur vel tortor elit. Donec laoreet, quam ac sollicitudin ultricies, tortor est cursus augue, eget dapibus risus tortor at quam. Sed facilisis semper magna. Praesent vel risus ut turpis vulputate pulvinar ac id augue. Vestibulum non quam leo. Integer feugiat mauris in nunc cursus, et tincidunt nisl vestibulum. Vestibulum pulvinar augue est, nec bibendum mauris iaculis in.',
            technologies: ['React', 'TypeScript']
        },
        {
            title: 'TypeScript Project',
            url: '#',
            shortDescription: 'This is a short desc.',
            description: 'Integer hendrerit fermentum risus, sit amet gravida sem eleifend ut. Maecenas sodales metus a nisi sodales, et tincidunt lectus dapibus. Ut et vestibulum sem. Duis et maximus nulla. Vivamus maximus consectetur enim nec congue. Morbi a purus mauris. Sed facilisis semper magna. Praesent vel risus ut turpis vulputate pulvinar ac id augue. Vestibulum non quam leo. Integer feugiat mauris in nunc cursus, et tincidunt nisl vestibulum. Vestibulum pulvinar augue est, nec bibendum mauris iaculis in.',
            technologies: ['MaterialDesign']
        },
        {
            title: 'Webpack Project',
            url: '#',
            shortDescription: 'This is a short desc.',
            description: 'Sed facilisis semper magna. Praesent vel risus ut turpis vulputate pulvinar ac id augue. Vestibulum non quam leo. Integer feugiat mauris in nunc cursus, et tincidunt nisl vestibulum. Vestibulum pulvinar augue est, nec bibendum mauris iaculis in. Sed facilisis semper magna. Praesent vel risus ut turpis vulputate pulvinar ac id augue. Vestibulum non quam leo. Integer feugiat mauris in nunc cursus, et tincidunt nisl vestibulum. Vestibulum pulvinar augue est, nec bibendum mauris iaculis in.',
            technologies: ['LinkedIn']
        }
    ];

    return (
        <Router>
            <div className="app-content">
                <Header/>
                <div
                    style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}> {/* Inline style for grid */}
                    {projects.map((project, index) => (
                        <div style={{margin: '1rem'}}> {/* Inline style for cards */}
                            <ProjectCard key={index} {...project} />
                        </div>
                    ))}
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
