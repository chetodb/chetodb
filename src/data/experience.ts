import type { ExperienceEntry } from "../types/experience";

export const experience: Record<string, ExperienceEntry[]> = {
    es: [
        {
            company: "LUBRIMED SL",
            totalDuration: "4 años · Benicarló, Valencia",
            location: "Benicarló, Comunidad Valenciana, España · Presencial",
            roles: [
                {
                    title: "Full Stack Developer & Responsable de IT",
                    period: "ene. 2025 – actualidad",
                    duration: "1 año 3 meses",
                    bullets: [
                        "Gestión del departamento IT (equipo de 2 personas): planificación del roadmap y distribución de tareas.",
                        "Mantenimiento de infraestructura Docker/Portainer tanto cloud como on-premise.",
                        "Priorización de nuevas integraciones y evolución continua del SGA.",
                    ],
                },
                {
                    title: "Full Stack Developer",
                    period: "mar. 2022 – dic. 2024",
                    duration: "2 años 10 meses",
                    bullets: [
                        "Diseño e implementación de arquitectura de microservicios (NestJS + RabbitMQ + Redis) desplegada en Docker/Portainer.",
                        "30 integraciones B2B con proveedores y transportistas mediante API/EDI, sincronizando 12.500 SKUs cada 10 min (<30s de proceso).",
                        "Automatización de 650 expediciones/día: de 2 min por pedido a 1 clic, ahorrando ≈22h de trabajo manual diario.",
                        "Expansión operativa a 9 países sin ampliar plantilla de almacén ni IT.",
                        "Implementación de inventario dual por lote y ubicación, eliminando discrepancias de stock.",
                        "Coordinación de resolución de incidentes críticos con fixes desplegados en menos de 24h sin downtime perceptible.",
                    ],
                },
            ],
            tags: [
                "TypeScript",
                "NestJS",
                "Vue 3",
                "PostgreSQL",
                "RabbitMQ",
                "Redis",
                "Docker",
                "Portainer",
            ],
        },
    ],
    en: [
        {
            company: "LUBRIMED SL",
            totalDuration: "4 years · Benicarló, Valencia",
            location: "Benicarló, Valencian Community, Spain · On-site",
            roles: [
                {
                    title: "Full Stack Developer & Head of IT",
                    period: "Jan 2025 – present",
                    duration: "1 year 3 months",
                    bullets: [
                        "IT department management (2-person team): roadmap planning and task distribution.",
                        "Maintenance of Docker/Portainer infrastructure, both cloud and on-premise.",
                        "Prioritization of new integrations and continuous evolution of the WMS.",
                    ],
                },
                {
                    title: "Full Stack Developer",
                    period: "Mar 2022 – Dec 2024",
                    duration: "2 years 10 months",
                    bullets: [
                        "Designed and implemented a microservices architecture (NestJS + RabbitMQ + Redis) deployed in Docker/Portainer.",
                        "30 B2B integrations with suppliers and carriers via API/EDI, syncing 12,500 SKUs every 10 min (<30s processing).",
                        "Automated 650 shipments/day: from 2 min per order to 1 click, saving ≈22h of manual work daily.",
                        "Enabled expansion to 9 countries without growing warehouse or IT headcount.",
                        "Implemented dual inventory by batch and location, eliminating stock discrepancies.",
                        "Coordinated critical incident resolution, deploying fixes in under 24h with no perceptible downtime.",
                    ],
                },
            ],
            tags: [
                "TypeScript",
                "NestJS",
                "Vue 3",
                "PostgreSQL",
                "RabbitMQ",
                "Redis",
                "Docker",
                "Portainer",
            ],
        },
    ],
};
