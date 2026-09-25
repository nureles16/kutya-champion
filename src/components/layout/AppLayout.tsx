import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function AppLayout() {
    const [mobileMenuOpen, setMobileMenuOpen] =
        useState(false)

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="flex min-h-screen">
                <div className="hidden md:block">
                    <Sidebar />
                </div>

                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-50 flex md:hidden">
                        <div
                            className="fixed inset-0 bg-black/30"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <div className="relative z-10">
                            <Sidebar
                                onNavigate={() =>
                                    setMobileMenuOpen(false)
                                }
                            />
                        </div>
                    </div>
                )}

                <div className="flex min-w-0 flex-1 flex-col">
                    <Header
                        onMenuClick={() => setMobileMenuOpen(true)}
                    />

                    <main className="flex-1 p-4 md:p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}
