export class Project {
    title: string;
    url?: string;
    shortDescription?: string;
    description?: string;
    technologies: string[];

    constructor(
        title: string,
        url: string,
        shortDescription: string,
        description: string,
        technologies: string[]
    ) {
        this.title = title;
        this.url = url;
        this.shortDescription = shortDescription;
        this.description = description;
        this.technologies = technologies;
    }
}

export default Project;