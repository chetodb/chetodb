export interface TechLanguage {
    name: string;
    status: 'active' | 'focus';
}

export interface InfrastructureItem {
    name: string;
    icon: string;
}

export interface TechStack {
    languages: TechLanguage[];
    infrastructure: InfrastructureItem[];
    currentFocus: string;
}
