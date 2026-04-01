import type { EducationData } from "../types/education";

export const education: Record<string, EducationData> = {
    es: {
        degrees: [
            {
                institution: "IES Joan Coromines",
                degree: "Ciclo Formativo de Grado Superior",
                field: "Desarrollo de Aplicaciones Web",
                period: "sept. 2020 – jun. 2022",
                grade: "8/10",
                project:
                    "CRM completo en Vue 3 + NestJS + PostgreSQL. API REST, JWT y despliegue Docker.",
            },
            {
                institution: "IES El Caminàs",
                degree: "Ciclo Formativo de Grado Medio",
                field: "Sistemas microinformáticos y redes",
            },
        ],
        certifications: [
            {
                name: "Python (70 h)",
                issuer: "Imagina Formación",
                date: "sept. 2025",
                credential: "AF-88 · Grupo 01",
            },
        ],
    },
    en: {
        degrees: [
            {
                institution: "IES Joan Coromines",
                degree: "Higher Vocational Training",
                field: "Web Application Development",
                period: "Sept. 2020 – Jun. 2022",
                grade: "8/10",
                project:
                    "Full CRM built with Vue 3 + NestJS + PostgreSQL. REST API, JWT auth and Docker deployment.",
            },
            {
                institution: "IES El Caminàs",
                degree: "Vocational Training",
                field: "Computer Systems and Networks",
            },
        ],
        certifications: [
            {
                name: "Python (70 h)",
                issuer: "Imagina Formación",
                date: "Sept. 2025",
                credential: "AF-88 · Grupo 01",
            },
        ],
    },
};
