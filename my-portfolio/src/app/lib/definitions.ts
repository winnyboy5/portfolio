export interface Stack {
    category: string
    grid: string
    skills: Skill[]
}

export interface Skill {
    title: string
    icon?: string
}