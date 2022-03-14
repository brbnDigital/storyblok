import 'dotenv/config'

export const STORYBLOK_API: string = "https://api.storyblok.com/v1"
export const ACCESS_TOKEN = process.env.VITE_STORYBLOK_ACCESS_TOKEN ?? undefined
export const SPACE_ID = process.env.VITE_STORYBLOK_SPACE_ID ?? undefined
