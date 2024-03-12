export class Project {
    title: string;
    url?: string;
    description?: string;
    technologies: string[];
    content: string;

    constructor(
        title: string,
        url: string,
        description: string,
        technologies: string[],
        content:string
    ) {
        this.title = title;
        this.url = url;
        this.description = description;
        this.technologies = technologies;
        this.content = content;
    }
}

export default Project;