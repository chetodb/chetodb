export interface Stat {
    label: string;
    value: string;
    progress?: number;
}

export interface Project {
    index: string;
    title: string;
    visibility: "public" | "private";
    badge?: string;
    tags: string[];
    stats: Stat[];
    description: string;
    linkText?: string;
    linkUrl?: string;
    challenge: string;
    challengeLabel?: string;
    groupStart?: string;
    install?: string[];
    githubUrl?: string;
}
