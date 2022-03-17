"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAsset = exports.GetAsset = exports.GetAssets = void 0;
const client_1 = require("../client");
const variables_1 = require("../variables");
async function GetAssets() {
    let request = await client_1.client.get(`spaces/${variables_1.SPACE_ID}/assets`);
    return request.data.assets ?? [];
}
exports.GetAssets = GetAssets;
async function GetAsset(assetId) {
    let request = await client_1.client.get(`spaces/${variables_1.SPACE_ID}/assets/${assetId}`);
    return request.data ?? undefined;
}
exports.GetAsset = GetAsset;
async function UpdateAsset(assetId, asset) {
    await client_1.client.put(`spaces/${variables_1.SPACE_ID}/assets/${assetId}`, asset);
    return await GetAsset(assetId);
}
exports.UpdateAsset = UpdateAsset;
