export type ProvidersId = 
    | 'locatel'
    | 'farmatodo'
    | 'farmarket'

export interface ProviderInfo {
    id: ProvidersId
    name: string
    active?: boolean
}