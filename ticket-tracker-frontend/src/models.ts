export interface ManufacturerForm  {
    manufacturerName: string
    manufacturerDescription: string
}

export interface Manufacturer {
    id: string
    name: string
    description: string
}

export interface Machine {
    id: string
    name: string
    description: string
    created_at: string
    modified_at: string
}