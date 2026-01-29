import type { ui } from "../i18n/ui";

export type NavKey = keyof typeof ui.es;

interface MenuItem {
    key: NavKey;
    href: string;
    number: string;
}

export const menuItems: MenuItem[] = [
    { key: "nav.work", href: "#work", number: "01" },
    { key: "nav.philosophy", href: "#philosophy", number: "02" },
    { key: "nav.stack", href: "#stack", number: "03" },
    { key: "nav.contact", href: "#contact", number: "04" },
];
