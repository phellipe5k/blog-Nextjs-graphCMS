export interface Profile {
    email: string;
    githubProfileUrl: string;
    instagramUrl: string;
    linkedInUrl: string;
    name: string;
    phoneNumber: string;
    twitterUrl: string;
    projects: {
    githubRepository: string;
    description: string;
    image: {
        url: string;
    }
    technologies: {
        name: string;
        iconSvg: any
        documentationUrl: string;
    }
    }
    technologies: {
    name: string;
    iconSvg: any;
    documentationUrl: string;
    }
}