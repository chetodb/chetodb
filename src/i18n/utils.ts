import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: string | undefined) {
    const validLang = (lang && lang in ui) ? (lang as keyof typeof ui) : defaultLang;
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[validLang][key] || ui[defaultLang][key];
    };
}
