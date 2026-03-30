export interface ExperienceRole {
    title: string;
    period: string;
    duration: string;
    bullets: string[];
}

export interface ExperienceEntry {
    company: string;
    totalDuration: string;
    location: string;
    roles: ExperienceRole[];
    tags: string[];
}
