export interface ManufacturerForm  {
    manufacturerName: string
    manufacturerDescription: string
}

export interface Manufacturer {
    url: string
    slug: string
    name: string
    description: string
    created_at: string
    modified_at: string
}

export interface MachineForm {
    machineId?: string
    machineName: string
    machineDescription: string,
    manufacturerIds: Array<String>
}

export interface Machine {
    url: string
    slug: string
    name: string
    description: string
    manufacturers: Array<Manufacturer>
    date_created: string
    date_modified: string
}

export interface Role {
    id: string
    name: string
}

export interface UserRegistrationForm {
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    mobile: string
}

export interface User {
    id: string
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    mobile: string
}

export interface UserMeta {
    username: string
    roles: Array<Role>
}

export interface LoginFormFields {
    username: string
    password: string
}

export interface ComplaintFormFields {
    title: string
    machineId: string
    description: string
    severity: string
}

export interface Complaint {
    id: string
    title: string
    machineId: string
    description: string
    severity: string
    createdAt: string
    modifiedAt: string
}