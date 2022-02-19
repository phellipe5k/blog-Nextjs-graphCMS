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