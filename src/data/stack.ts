import type { TechStack } from "../types/stack";

export const stack: Record<string, TechStack> = {
    es: {
        languages: [
            { name: "TypeScript / Node.js", status: "active" },
            { name: "NestJS", status: "active" },
            { name: "Vue 3 / Nuxt", status: "active" },
            { name: "Python", status: "active" },
            { name: "Rust", status: "focus" },
        ],
        infrastructure: [
            { name: "Docker / Portainer", icon: "dns" },
            { name: "RabbitMQ / Redis", icon: "hub" },
            { name: "PostgreSQL · MySQL · MongoDB", icon: "storage" },
            { name: "CI/CD · Git", icon: "terminal" },
            { name: "Odoo ERP", icon: "inventory_2" },
            { name: "Azure (Business Central)", icon: "cloud" },
        ],
        currentFocus:
            "Diseño de SDKs open source type-safe y automatización de procesos B2B. Explorando Rust para sistemas de alto rendimiento.",
    },
    en: {
        languages: [
            { name: "TypeScript / Node.js", status: "active" },
            { name: "NestJS", status: "active" },
            { name: "Vue 3 / Nuxt", status: "active" },
            { name: "Python", status: "active" },
            { name: "Rust", status: "focus" },
        ],
        infrastructure: [
            { name: "Docker / Portainer", icon: "dns" },
            { name: "RabbitMQ / Redis", icon: "hub" },
            { name: "PostgreSQL · MySQL · MongoDB", icon: "storage" },
            { name: "CI/CD · Git", icon: "terminal" },
            { name: "Odoo ERP", icon: "inventory_2" },
            { name: "Azure (Business Central)", icon: "cloud" },
        ],
        currentFocus:
            "Building type-safe open source SDKs and automating B2B processes. Exploring Rust for high-performance systems.",
    },
};
