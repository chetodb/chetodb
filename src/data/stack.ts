import type { TechStack } from '../types/stack';

export const stack: Record<string, TechStack> = {
    es: {
        languages: [
            { name: 'Lenguaje Principal', status: 'active' },
            { name: 'Lenguaje Secundario', status: 'active' },
            { name: 'Framework A', status: 'active' },
            { name: 'Tecnología Emergente', status: 'focus' }
        ],
        infrastructure: [
            { name: 'Contenedores', icon: 'dns' },
            { name: 'Nube Pública', icon: 'cloud' },
            { name: 'IaC', icon: 'terminal' },
            { name: 'Mensajería', icon: 'hub' }
        ],
        currentFocus: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.'
    },
    en: {
        languages: [
            { name: 'Primary Language', status: 'active' },
            { name: 'Secondary Language', status: 'active' },
            { name: 'Framework A', status: 'active' },
            { name: 'Emerging Tech', status: 'focus' }
        ],
        infrastructure: [
            { name: 'Containers', icon: 'dns' },
            { name: 'Public Cloud', icon: 'cloud' },
            { name: 'IaC', icon: 'terminal' },
            { name: 'Messaging', icon: 'hub' }
        ],
        currentFocus: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.'
    }
};
