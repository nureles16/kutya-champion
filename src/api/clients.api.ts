import { api } from './axios'
import type {
    Client,
    CreateClientRequest,
} from '../types/client'

export const clientsApi = {
    getAll() {
        return api.get<Client[]>('/api/admin/clients')
    },

    getById(id: number) {
        return api.get<Client>(`/api/admin/clients/${id}`)
    },

    create(data: CreateClientRequest) {
        return api.post<Client>('/api/admin/clients', data)
    },

    delete(id: number) {
        return api.delete(`/api/admin/clients/${id}`)
    },
}
