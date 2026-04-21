import type { Project } from "../types/project";

export const projects: Record<string, Project[]> = {
    es: [
        {
            index: "01",
            title: "SGA · LUBRIMED",
            visibility: "private",
            badge: "Producción · Privado",
            tags: [
                "NestJS",
                "RabbitMQ",
                "Redis",
                "PostgreSQL",
                "Docker",
                "Vue 3",
            ],
            stats: [
                { label: "Tiempo ahorrado", value: "22h/día" },
                { label: "Expediciones/día", value: "650" },
                { label: "Integraciones B2B", value: "30 socios" },
            ],
            description:
                "Sistema de gestión de almacén diseñado desde cero con arquitectura de microservicios. Conecta el almacén con más de 30 socios externos, transportistas, distribuidores y fabricantes para dropshipping mediante API/EDI, sincronizando stock en tiempo real y automatizando el flujo completo de expediciones.",
            challenge:
                "El SGA opera en 3 almacenes simultáneamente. Automatizar 650 expediciones/día a 1 clic ahorró 22h de trabajo manual diario.",
            challengeLabel: "Impacto",
        },
        {
            index: "02",
            title: "Worker Engine · LUBRIMED",
            visibility: "private",
            badge: "Producción · En desarrollo",
            tags: ["NestJS", "BullMQ", "RabbitMQ", "Redis"],
            stats: [
                { label: "Colas de tareas", value: "BullMQ" },
                { label: "Bus de eventos", value: "RabbitMQ" },
                { label: "Avance", value: "En curso", progress: 55 },
            ],
            description:
                "Sistema independiente de procesamiento masivo de eventos y tareas asíncronas. Combina colas BullMQ con workers NestJS para ejecutar tareas pesadas en background y orquestar eventos de negocio entre sistemas: integraciones, sincronizaciones y notificaciones, de forma resiliente y escalable.",
            challenge:
                "Gestionar cargas de trabajo asíncronas masivas de forma fiable, con reintentos automáticos, visibilidad del estado de cada tarea y sin bloquear el flujo principal.",
            challengeLabel: "Reto",
        },
        {
            index: "03",
            title: "Business Central SDK",
            visibility: "public",
            badge: "Personal · Open Source",
            tags: ["TypeScript", "NestJS"],
            stats: [
                { label: "Estado", value: "Activo" },
                { label: "Plataforma", value: "Dynamics 365" },
                { label: "Paquetes", value: "2 paquetes" },
            ],
            description:
                "Ecosistema de librerías open source para integrar Microsoft Dynamics 365 Business Central en proyectos TypeScript/NestJS. SDK resiliente y type-safe con constructor OData fluent, rotación automática de claves y módulo NestJS plug-and-play.",
            linkText: "npm",
            linkUrl: "https://www.npmjs.com/~chetodb",
            install: [
                "pnpm add @chetodb/business-central",
                "pnpm add @chetodb/nestjs-business-central",
            ],
            githubUrl: "https://github.com/chetodb/ts-business-central",
            challenge:
                "Crear una capa de abstracción tipada y reutilizable sobre la API de Business Central que simplifique las integraciones ERP en proyectos Node.js.",
            challengeLabel: "Objetivo",
            groupStart: "Personal",
        },
        {
            index: "04",
            title: "address-kit",
            visibility: "public",
            badge: "Personal · Open Source",
            tags: ["TypeScript"],
            stats: [
                { label: "Geocoding", value: "Nominatim" },
                { label: "Cobertura", value: "Multi-país" },
                { label: "Caché", value: "LRU" },
            ],
            description:
                "Librería TypeScript para resolución, normalización y enriquecimiento de direcciones postales usando la API Nominatim de OpenStreetMap. Diseñada para logística y e-commerce con soporte multi-país, caché LRU configurable y soporte para proveedores personalizados.",
            linkText: "npm",
            linkUrl: "https://www.npmjs.com/package/address-kit",
            install: ["pnpm add address-kit"],
            githubUrl: "https://github.com/chetodb/address-kit",
            challenge:
                "Nació de una necesidad real en LUBRIMED: validar y normalizar direcciones de envío de 9 países sin depender de servicios de pago.",
            challengeLabel: "Origen",
        },
    ],
    en: [
        {
            index: "01",
            title: "WMS · LUBRIMED",
            visibility: "private",
            badge: "Production · Private",
            tags: [
                "NestJS",
                "RabbitMQ",
                "Redis",
                "PostgreSQL",
                "Docker",
                "Vue 3",
            ],
            stats: [
                { label: "Time saved", value: "22h/day" },
                { label: "Shipments/day", value: "650" },
                { label: "B2B integrations", value: "30 partners" },
            ],
            description:
                "Warehouse management system built from scratch with a microservices architecture. Connects the warehouse with more than 30 external partners, carriers, distributors and manufacturers for dropshipping via API/EDI, syncing stock in real time and fully automating the shipment workflow.",
            challenge:
                "The WMS runs across 3 warehouses simultaneously. Automating 650 shipments/day down to 1 click saved 22h of manual work daily.",
            challengeLabel: "Impact",
        },
        {
            index: "02",
            title: "Worker Engine · LUBRIMED",
            visibility: "private",
            badge: "Production · In development",
            tags: ["NestJS", "BullMQ", "RabbitMQ", "Redis"],
            stats: [
                { label: "Task queues", value: "BullMQ" },
                { label: "Event bus", value: "RabbitMQ" },
                { label: "Progress", value: "Ongoing", progress: 55 },
            ],
            description:
                "Independent system for massive event and async task processing. Combines BullMQ queues with NestJS workers to run heavy background tasks and orchestrate business events across systems: integrations, synchronizations and notifications, in a resilient and scalable way.",
            challenge:
                "Handle massive async workloads reliably, with automatic retries, per-task status visibility and without blocking the main flow.",
            challengeLabel: "Challenge",
        },
        {
            index: "03",
            title: "Business Central SDK",
            visibility: "public",
            badge: "Personal · Open Source",
            tags: ["TypeScript", "NestJS"],
            stats: [
                { label: "Status", value: "Active" },
                { label: "Platform", value: "Dynamics 365" },
                { label: "Packages", value: "2 packages" },
            ],
            description:
                "Open source library ecosystem for integrating Microsoft Dynamics 365 Business Central into TypeScript/NestJS projects. Resilient, type-safe SDK with fluent OData builder, automatic key rotation and plug-and-play NestJS module.",
            linkText: "npm",
            linkUrl: "https://www.npmjs.com/~chetodb",
            install: [
                "pnpm add @chetodb/business-central",
                "pnpm add @chetodb/nestjs-business-central",
            ],
            githubUrl: "https://github.com/chetodb/ts-business-central",
            challenge:
                "Build a typed, reusable abstraction layer over the Business Central API that simplifies ERP integrations in Node.js projects.",
            challengeLabel: "Goal",
            groupStart: "Personal",
        },
        {
            index: "04",
            title: "address-kit",
            visibility: "public",
            badge: "Personal · Open Source",
            tags: ["TypeScript"],
            stats: [
                { label: "Geocoding", value: "Nominatim" },
                { label: "Coverage", value: "Multi-country" },
                { label: "Cache", value: "LRU" },
            ],
            description:
                "TypeScript library for address resolution, normalization and enrichment using OpenStreetMap's Nominatim API. Built for logistics and e-commerce with multi-country support, configurable LRU cache and custom provider support.",
            linkText: "npm",
            linkUrl: "https://www.npmjs.com/package/address-kit",
            install: ["pnpm add address-kit"],
            githubUrl: "https://github.com/chetodb/address-kit",
            challenge:
                "Born from a real need at LUBRIMED: validate and normalize shipping addresses across 9 countries without relying on paid services.",
            challengeLabel: "Origin",
        },
    ],
};
