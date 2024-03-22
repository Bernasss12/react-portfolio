import React, {useEffect, useState} from 'react';
import './styles/_global.scss'
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import ProjectCard from "./components/project-card/ProjectCard";
import {BrowserRouter as Router} from "react-router-dom";
import Project from "./models/Project";
import {parse} from 'yaml'
import axios from "axios";

/*
  TODO Change tooltip style.
  TODO Center card footer icons vertically.
  TODO Maybe ditch the icon on the card and replace the link with the gh logo (when gh repo available)
 */

declare var require: NodeRequire;

interface NodeRequire {
    context: (directory: string, useSubdirectories?: boolean, regExp?: RegExp) => any;
}

function App() {

    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        return
        // const requireContext = require.context('./content/projects/', false, /\.md$/);
        // const markdownFiles = requireContext.keys();
        //
        // Promise.all(
        //     markdownFiles.map(async (file: string) => {
        //         const filePath = requireContext(file);
        //         try {
        //             const fileContent = await axios.get(filePath, { responseType: 'text' })
        //             console.log("DATA")
        //             console.log(fileContent.data)
        //             console.log("/DATA/")
        //             const parts = fileContent.data.split("---")
        //             const yaml = parts[1]
        //             console.log("YAML")
        //             console.log(yaml)
        //             console.log("/YAML/")
        //             const markdown = parts[2]
        //             console.log("MD")
        //             console.log(markdown)
        //             console.log("/MD/")
        //             const metadata = parse(yaml)
        //             console.log("PARSED")
        //             console.log(metadata)
        //             console.log("/PARSED/")
        //             return {
        //                 title: metadata.title,
        //                 url: metadata.url,
        //                 shortDescription: metadata.shortDescription,
        //                 description: metadata.description,
        //                 technologies: metadata.technologies,
        //                 content: markdown
        //             }
        //         } catch (error) {
        //             console.error("Error occur while fetching markdown file: ", error);
        //         }
        //     })
        // ).then((projectData) => {
        //     setProjects(projectData);
        // });
    }, []);

    //document.documentElement.setAttribute('data-theme', 'light');

    return (
        <Router>
            <Wrapper>
                <Header/>
                {/*<div*/}
                {/*    style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>*/}
                {/*    {projects.map((project, index) => (*/}
                {/*        <div style={{margin: '1rem'}}>*/}
                {/*            <ProjectCard key={index} {...project} />*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="grow p-4">
                    {/*<p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p>*/}
                    {/*<p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p>*/}
                    {/*<p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p>*/}
                    {/*<p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p>*/}
                    {/*<p>Test</p><p>Test</p><p>Test</p><p>Test</p>*/}
                </div>
                <Footer/>
            </Wrapper>
        </Router>
    );
}

function Wrapper({children}: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-primary text-secondary">
            { children }
        </div>
    );
}

export default App;
