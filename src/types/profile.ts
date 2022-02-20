export interface Technology {
    name: string;
    slug: string;
    knowledge: number;
}

export interface Project {
    title: string;
    website: string;
    githubRepository: string;
    description: string;
    image: {
        url: string;
    }
    technologies: Technology[];
}

export interface Profile {
    email: string;
    githubProfileUrl: string;
    instagramUrl: string;
    role: string;
    aboutMe: {
        text: string;
    };
    linkedInUrl: string;
    name: string;
    phoneNumber: string;
    twitterUrl: string;
    profileImageUrl: string;
    projects: Project[];
    technologies: Technology[];
}