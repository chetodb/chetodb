export interface Stat {
    label: string;
    value: string;
    progress?: number;
    dots?: number;
}

export interface Project {
    index: string;
    title: string;
    visibility: 'public' | 'private';
    tags: string[];
    stats: Stat[];
    description: string;
    linkText?: string;
    linkUrl?: string;
    challenge: string;
    topology?: boolean;
    loadGraph?: boolean;
    streamGraph?: boolean;
}
