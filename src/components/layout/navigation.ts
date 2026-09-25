import type { UserRole } from '../../types/auth'

export interface NavigationItem {
    label: string
    path: string
    roles: UserRole[]
}

export const navigationItems: ({ path: string; roles: string[]; label: string } | {
    path: string;
    roles: string[];
    label: string
} | { path: string; roles: string[]; label: string } | { path: string; roles: string[]; label: string } | {
    path: string;
    roles: string[];
    label: string
} | { path: string; roles: string[]; label: string } | { path: string; roles: string[]; label: string } | {
    path: string;
    roles: string[];
    label: string
} | { path: string; roles: string[]; label: string } | { path: string; roles: string[]; label: string } | {
    path: string;
    roles: string[];
    label: string
} | { path: string; roles: string[]; label: string })[] = [
    {
        label: 'Dashboard',
        path: '/admin/dashboard',
        roles: ['ADMIN'],
    },
    {
        label: 'Clients',
        path: '/admin/clients',
        roles: ['ADMIN'],
    },
    {
        label: 'Messages',
        path: '/admin/messages',
        roles: ['ADMIN'],
    },
    {
        label: 'Analytics',
        path: '/admin/analytics',
        roles: ['ADMIN'],
    },
    {
        label: 'Registrations',
        path: '/admin/registrations',
        roles: ['ADMIN'],
    },
    {
        label: 'System',
        path: '/admin/system',
        roles: ['ADMIN'],
    },
    {
        label: 'API Console',
        path: '/admin/api-console',
        roles: ['ADMIN'],
    },

    // Client
    {
        label: 'Dashboard',
        path: '/client/dashboard',
        roles: ['COMPANY'],
    },
    {
        label: 'WhatsApp',
        path: '/client/whatsapp',
        roles: ['CLIENT'],
    },
    {
        label: 'Messages',
        path: '/client/messages',
        roles: ['CLIENT'],
    },
    {
        label: 'Logs',
        path: '/client/logs',
        roles: ['CLIENT'],
    },
    {
        label: 'Bot',
        path: '/client/bot',
        roles: ['CLIENT'],
    },
]
