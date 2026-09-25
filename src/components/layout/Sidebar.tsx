import { NavLink } from 'react-router-dom'

import { useAuth } from '../../app/providers/AuthProvider'
import { navigationItems } from './navigation'

interface SidebarProps {
    onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
    const { role, logout } = useAuth()

    const items = navigationItems.filter((item) =>
        role ? item.roles.includes(role) : false,
    )

    return (
        <aside className="flex h-full w-64 flex-col border-r bg-white">
            <div className="flex h-16 items-center border-b px-6">
        <span className="text-lg font-bold">
          WhatsApp Dashboard
        </span>
            </div>

            <nav className="flex-1 space-y-1 p-4">
                {items.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={onNavigate}
                        className={({ isActive }) =>
                            [
                                'block rounded-md px-3 py-2 text-sm font-medium transition',
                                isActive
                                    ? 'bg-slate-900 text-white'
                                    : 'text-slate-600 hover:bg-slate-100',
                            ].join(' ')
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="border-t p-4">
                <button
                    type="button"
                    onClick={logout}
                    className="w-full rounded-md px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                >
                    Logout
                </button>
            </div>
        </aside>
    )
}
