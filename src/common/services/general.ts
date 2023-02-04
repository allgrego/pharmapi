import { ProviderInfo, ProvidersId } from "../types/providers.types"

/**
 * Get the list of current active providers 
 * 
 * @return {ProviderInfo[]} List of active providers
 */
export function getProviders(): ProviderInfo[] {

    const providers: ProviderInfo[] = [
        { name: "Farmatodo", id: 'farmatodo', active: true },
        { name: "Locatel", id: 'locatel', active: true },
        { name: "Farmarket", id: 'farmarket', active: false },
    ]

    return providers.filter((provider) => Boolean(provider?.active))
}

/**
 * Verifies if a provider with provided ID is active
 * 
 * @param {ProvidersId} providerId ID of provider
 * 
 * @return {boolean} True if it's active. Otherwise, false
 */
export function providerIsActive(providerId: ProvidersId): boolean {
    return Boolean(getProviders().find((provider) => provider.id === providerId))
}