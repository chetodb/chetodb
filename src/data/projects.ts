import type { Project } from "../types/project";

export const projects: Record<string, Project[]> = {
    es: [
        {
            index: "01",
            title: "Proyecto Alpha",
            visibility: "public",
            tags: ["Tecnolog�a A", "Tecnolog�a B", "Tecnolog�a C"],
            stats: [
                { label: "M�trica 1", value: "100k" },
                { label: "M�trica 2", value: "< 10ms" },
                { label: "Disponibilidad", value: "99.99%", progress: 99.99 },
            ],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            linkText: "Ver Detalles",
            linkUrl: "#",
            challenge:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            loadGraph: true,
        },
        {
            index: "02",
            title: "Proyecto Beta",
            visibility: "private",
            tags: ["Tecnolog�a D", "Tecnolog�a E"],
            stats: [
                { label: "KPI Principal", value: "< 500ns" },
                { label: "Conectividad", value: "Protocolo X" },
                { label: "Estado", value: "�ptimo", dots: 5 },
            ],
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            challenge:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topology: true,
        },
        {
            index: "03",
            title: "Sistema Gamma",
            visibility: "public",
            tags: ["Tech F", "Tech G", "Tech H"],
            stats: [
                { label: "Nodos", value: "50+" },
                { label: "Modelo", value: "H�brido" },
                { label: "Salud", value: "Estable", dots: 5 },
            ],
            description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
            linkText: "Documentaci�n",
            linkUrl: "#",
            challenge:
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
            topology: true,
        },
    ],
    en: [
        {
            index: "01",
            title: "Project Alpha",
            visibility: "public",
            tags: ["Tech A", "Tech B", "Tech C"],
            stats: [
                { label: "Metric 1", value: "100k" },
                { label: "Metric 2", value: "< 10ms" },
                { label: "Uptime", value: "99.99%", progress: 99.99 },
            ],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            linkText: "View Details",
            linkUrl: "#",
            challenge:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            loadGraph: true,
        },
        {
            index: "02",
            title: "Project Beta",
            visibility: "private",
            tags: ["Tech D", "Tech E"],
            stats: [
                { label: "Core KPI", value: "< 500ns" },
                { label: "Connectivity", value: "Protocol X" },
                { label: "Status", value: "Optimal", dots: 5 },
            ],
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            challenge:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topology: true,
        },
        {
            index: "03",
            title: "System Gamma",
            visibility: "public",
            tags: ["Tech F", "Tech G", "Tech H"],
            stats: [
                { label: "Nodes", value: "50+" },
                { label: "Model", value: "Hybrid" },
                { label: "Health", value: "Stable", dots: 5 },
            ],
            description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
            linkText: "Documentation",
            linkUrl: "#",
            challenge:
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
            topology: true,
        },
    ],
};
