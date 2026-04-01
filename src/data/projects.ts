import type { Project } from "../types/project";

export const projects: Record<string, Project[]> = {
    es: [
        {
            index: "01",
            title: "SGA · LUBRIMED",
            visibility: "private",
            badge: "Producción · Privado",
            tags: ["NestJS", "RabbitMQ", "Redis", "PostgreSQL", "Docker"],
            stats: [
                { label: "SKUs sincronizados", value: "12.500" },
                { label: "Expediciones/día", value: "650" },
                { label: "Integraciones B2B", value: "30 socios", dots: 5 },
            ],
            description:
                "Sistema de gestión de almacén diseñado desde cero con arquitectura de microservicios. Conecta el almacén con más de 30 socios externos, transportistas, distribuidores y fabricantes para dropshipping mediante API/EDI, sincronizando stock en tiempo real y automatizando el flujo completo de expediciones.",
            linkText: "Arquitectura",
            linkUrl: "#",
            challenge:
                "Eliminar trabajo manual repetitivo (de 2 min por pedido a 1 clic) y garantizar coherencia de stock en operaciones multipaís con más de 30 integraciones externas activas.",
            challengeLabel: "Impacto",
            loadGraph: true,
        },
        {
            index: "02",
            title: "Business Central SDK",
            visibility: "public",
            badge: "Personal · Open Source · npm",
            tags: ["TypeScript", "NestJS", "npm"],
            stats: [
                { label: "Paquetes publicados", value: "3 packages" },
                { label: "Versión estable", value: "v0.1.2" },
                { label: "Estado", value: "Activo", dots: 5 },
            ],
            description:
                "Ecosistema de librerías open source para integrar Microsoft Dynamics 365 Business Central en proyectos TypeScript/NestJS. SDK resiliente y type-safe con módulo NestJS plug-and-play y librería de normalización de direcciones.",
            linkText: "Ver en npm",
            linkUrl: "https://www.npmjs.com/~chetodb",
            challenge:
                "Crear una capa de abstracción tipada y reutilizable sobre la API de Business Central que simplifique las integraciones ERP en proyectos Node.js.",
            challengeLabel: "Objetivo",
            streamGraph: true,
        },
        {
            index: "03",
            title: "SaaS · En desarrollo",
            visibility: "private",
            badge: "Personal · En desarrollo",
            tags: ["TypeScript", "Next.js", "Supabase"],
            stats: [
                { label: "Estado", value: "WIP" },
                { label: "Visibilidad", value: "Privado" },
                { label: "Progreso", value: "Activo", progress: 40 },
            ],
            description:
                "Proyecto SaaS en desarrollo activo. Detalles disponibles previa solicitud. Stack: TypeScript · Next.js · Supabase.",
            challenge:
                "Construir un producto propio escalable aplicando las lecciones aprendidas en años de trabajo con sistemas de producción complejos.",
            challengeLabel: "Motivación",
            topology: true,
        },
    ],
    en: [
        {
            index: "01",
            title: "WMS · LUBRIMED",
            visibility: "private",
            badge: "Production · Private",
            tags: ["NestJS", "RabbitMQ", "Redis", "PostgreSQL", "Docker"],
            stats: [
                { label: "SKUs synced", value: "12,500" },
                { label: "Shipments/day", value: "650" },
                { label: "B2B integrations", value: "30 partners", dots: 5 },
            ],
            description:
                "Warehouse management system built from scratch with a microservices architecture. Connects the warehouse with more than 30 external partners, carriers, distributors and manufacturers for dropshipping via API/EDI, syncing stock in real time and fully automating the shipment workflow.",
            linkText: "Architecture",
            linkUrl: "#",
            challenge:
                "Eliminate repetitive manual work (from 2 min per order to 1 click) and ensure stock consistency across multi-country operations with more than 30 active external integrations.",
            challengeLabel: "Impact",
            loadGraph: true,
        },
        {
            index: "02",
            title: "Business Central SDK",
            visibility: "public",
            badge: "Personal · Open Source · npm",
            tags: ["TypeScript", "NestJS", "npm"],
            stats: [
                { label: "Published packages", value: "3 packages" },
                { label: "Stable version", value: "v0.1.2" },
                { label: "Status", value: "Active", dots: 5 },
            ],
            description:
                "Open source library ecosystem for integrating Microsoft Dynamics 365 Business Central into TypeScript/NestJS projects. Resilient, type-safe SDK with a plug-and-play NestJS module and address normalization library.",
            linkText: "View on npm",
            linkUrl: "https://www.npmjs.com/~chetodb",
            challenge:
                "Build a typed, reusable abstraction layer over the Business Central API that simplifies ERP integrations in Node.js projects.",
            challengeLabel: "Goal",
            streamGraph: true,
        },
        {
            index: "03",
            title: "SaaS · In progress",
            visibility: "private",
            badge: "Personal · In development",
            tags: ["TypeScript", "Next.js", "Supabase"],
            stats: [
                { label: "Status", value: "WIP" },
                { label: "Visibility", value: "Private" },
                { label: "Progress", value: "Active", progress: 40 },
            ],
            description:
                "SaaS project in active development. Details available upon request. Stack: TypeScript · Next.js · Supabase.",
            challenge:
                "Build a scalable product of my own applying lessons learned from years working with complex production systems.",
            challengeLabel: "Motivation",
            topology: true,
        },
    ],
};
