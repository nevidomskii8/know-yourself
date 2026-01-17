export const APP_CONFIG = {
  name: 'React SPA App',
  version: '1.0.0',
  description: 'Современное одностраничное приложение на React',
} as const

export const API_ENDPOINTS = {
  base: '/api',
  users: '/users',
  posts: '/posts',
} as const

export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
} as const

export const THEME = {
  colors: {
    primary: '#3b82f6',
    secondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const

export const LANGUAGES = [
  { code: 'ru', name: 'RU', fullName: 'Русский' },
  { code: 'uk', name: 'UK', fullName: 'Українська' },
  { code: 'en', name: 'EN', fullName: 'English' }
] as const
