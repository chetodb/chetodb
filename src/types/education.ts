export interface Degree {
    institution: string;
    degree: string;
    field: string;
    period?: string;
    grade?: string;
    project?: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    credential?: string;
}

export interface EducationData {
    degrees: Degree[];
    certifications: Certification[];
}
