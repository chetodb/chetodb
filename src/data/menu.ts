import type { ui } from "../i18n/ui";

export type NavKey = keyof typeof ui.es;

interface MenuItem {
    key: NavKey;
    href: string;
    number: string;
}

export const menuItems: MenuItem[] = [
    { key: "nav.methodology", href: "#methodology", number: "01" },
    { key: "nav.experience", href: "#experience", number: "02" },
    { key: "nav.work", href: "#work", number: "03" },
    { key: "nav.education", href: "#education", number: "04" },
    { key: "nav.contact", href: "#contact", number: "05" },
];
