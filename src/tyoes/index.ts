export const userRole ={
   admin : 'admin',
   agent : 'agent',
   user : 'user'
} as const

export type Role = 'admin' | 'agent' | 'user'