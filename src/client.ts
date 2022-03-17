import StoryblokClient from "storyblok-js-client"
import { STORYBLOK_API, ACCESS_TOKEN, SPACE_ID } from "./variables"

if(!ACCESS_TOKEN || !SPACE_ID) throw new Error("Storyblok Access Token and Space ID are required")

const client = new StoryblokClient({ oauthToken: ACCESS_TOKEN }, STORYBLOK_API)

export { client }
