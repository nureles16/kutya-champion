import {
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'

import { clientsApi } from '../api/clients.api'
import type { CreateClientRequest } from '../types/client'

export const clientsQueryKey = ['clients']

export function useClients() {
    return useQuery({
        queryKey: clientsQueryKey,
        queryFn: async () => {
            const response = await clientsApi.getAll()
            return response.data
        },
    })
}

export function useClient(id: number) {
    return useQuery({
        queryKey: ['clients', id],
        queryFn: async () => {
            const response = await clientsApi.getById(id)
            return response.data
        },
        enabled: id > 0,
    })
}

export function useCreateClient() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CreateClientRequest) =>
            clientsApi.create(data),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: clientsQueryKey,
            })
        },
    })
}

export function useDeleteClient() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: number) =>
            clientsApi.delete(id),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: clientsQueryKey,
            })
        },
    })
}
