"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const storyblok_js_client_1 = __importDefault(require("storyblok-js-client"));
const variables_1 = require("./variables");
if (!variables_1.ACCESS_TOKEN || !variables_1.SPACE_ID)
    throw new Error("Storyblok Access Token and Space ID are required");
const client = new storyblok_js_client_1.default({ oauthToken: variables_1.ACCESS_TOKEN }, variables_1.STORYBLOK_API);
exports.client = client;
