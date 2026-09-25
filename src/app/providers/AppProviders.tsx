import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

import { queryClient } from '../query-client'
import { AuthProvider } from './AuthProvider'

interface AppProvidersProps {
    children: ReactNode
}

export function AppProviders({
                                 children,
                             }: AppProvidersProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </QueryClientProvider>
    )
}
