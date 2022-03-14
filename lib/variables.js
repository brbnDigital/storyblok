"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPACE_ID = exports.ACCESS_TOKEN = exports.STORYBLOK_API = void 0;
exports.STORYBLOK_API = "https://api.storyblok.com/v1";
exports.ACCESS_TOKEN = process.env.VITE_STORYBLOK_ACCESS_TOKEN ?? undefined;
exports.SPACE_ID = process.env.VITE_STORYBLOK_SPACE_ID ?? undefined;
