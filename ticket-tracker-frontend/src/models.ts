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
    dateCreated: string
    dateModified: string
}

export interface Role {
    id: string
    name: string
}

export interface User {
    id?: string
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    mobile: string
}