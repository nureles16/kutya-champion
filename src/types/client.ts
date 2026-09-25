export interface Client {
    id: number
    name: string
    phone?: string
    email?: string

    botEnabled: boolean
    botSystemPrompt?: string
    botSystemPromptUpdatedAt?: string

    botAutoReplyDelaySeconds: number

    botWorkStartTime?: string
    botWorkEndTime?: string

    routingEnabled: boolean
    routingGreetingText?: string
    routingPersonalText?: string

    createdAt: string
}

export interface CreateClientRequest {
    name: string
    phone?: string
    email?: string
    password: string
}
