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
    topology?: boolean;
    loadGraph?: boolean;
    streamGraph?: boolean;
    groupStart?: string;
    install?: string[];
    githubUrl?: string;
}
