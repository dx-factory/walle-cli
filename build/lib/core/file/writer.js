"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = exports.createDirectory = void 0;
var fs = __importStar(require("fs"));
var createDirectory = function (path, name) {
    var directoryPath = "".concat(path, "/").concat(name);
    // Check if the directory already exists
    if (fs.existsSync(directoryPath)) {
        return;
    }
    // Create the directory
    fs.mkdirSync(directoryPath);
};
exports.createDirectory = createDirectory;
var createFile = function (path, name, data) {
    if (data === void 0) { data = ""; }
    var filePath = "".concat(path, "/").concat(name);
    // Check if the file already exists
    if (fs.existsSync(filePath)) {
        return;
    }
    // Create an empty file
    fs.writeFileSync(filePath, data);
};
exports.createFile = createFile;
