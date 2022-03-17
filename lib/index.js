"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAsset = exports.GetAsset = exports.GetAssets = exports.GenerateTypes = void 0;
var type_generator_1 = require("./type-generator");
Object.defineProperty(exports, "GenerateTypes", { enumerable: true, get: function () { return type_generator_1.GenerateTypes; } });
var asset_manager_1 = require("./asset-manager");
Object.defineProperty(exports, "GetAssets", { enumerable: true, get: function () { return asset_manager_1.GetAssets; } });
Object.defineProperty(exports, "GetAsset", { enumerable: true, get: function () { return asset_manager_1.GetAsset; } });
Object.defineProperty(exports, "UpdateAsset", { enumerable: true, get: function () { return asset_manager_1.UpdateAsset; } });
