"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_PROTOTYPE_MANUAL = exports.SET_PROTOTYPE_ADD_MANUAL_QUESTION = exports.SET_PROTOTYPE_PART_QUESTION = exports.SET_PROTOTYPE_REFERENCE_QUESTION = exports.SET_MANUAL_FOLDER_QUESTION = exports.SET_MANUAL_REFERENCE_QUESTION = exports.SET_INSTRUCTION_TRIGGER_QUESTION = exports.SET_INSTRUCTION_PREFFIX_QUESTION = exports.SET_INSTRUCTION_FILENAME_QUESTION = exports.SET_INSTRUCTION_EXTENSION_QUESTION = exports.ADD_INSTRUCTIONS_QUESTION = void 0;
var service_factory_1 = __importDefault(require("../../services/service.factory"));
/**
 * Design Manual questions
 */
exports.ADD_INSTRUCTIONS_QUESTION = {
    message: "Do you want to create an instruction for this manual?",
    options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
    ],
};
exports.SET_INSTRUCTION_EXTENSION_QUESTION = {
    message: "Set your file extension:",
    placeholder: "js, ts, go, cpp...",
    optional: true,
};
exports.SET_INSTRUCTION_FILENAME_QUESTION = {
    message: "Specify your fileName name:",
    placeholder: "index, main, app...",
    optional: true,
};
exports.SET_INSTRUCTION_PREFFIX_QUESTION = {
    message: "Specify the suffix:",
    placeholder: "styles, types, api...",
    optional: true,
};
exports.SET_INSTRUCTION_TRIGGER_QUESTION = {
    message: "Specify the trigger:",
    optional: true,
};
exports.SET_MANUAL_REFERENCE_QUESTION = {
    message: "Enter the manual reference name:",
    placeholder: "module, ui, component...",
    validate: function (value) {
        if (!value.length)
            return "Manual reference name cannot be empty.";
        if (service_factory_1.default.getManualService.manualExists(value))
            return "Manual already exists. Choose another reference name!";
    },
};
exports.SET_MANUAL_FOLDER_QUESTION = {
    message: "Do you want to create a folder for this manual?",
    options: [
        {
            label: "Yes",
            value: true,
            hint: "A folder will be created with the same name as the manual reference to wrap all files.",
        },
        {
            label: "No",
            value: false,
        },
    ],
};
/**
 * Design Prototype questions
 */
exports.SET_PROTOTYPE_REFERENCE_QUESTION = {
    message: "Enter the prototype reference name:",
    placeholder: "module, ui, component...",
    validate: function (value) {
        if (!value.length)
            return "Prototype reference name cannot be empty.";
        if (service_factory_1.default.getPrototypeService.prototypeExists(value))
            return "Prototype already exists. Choose another reference name!";
    },
};
exports.SET_PROTOTYPE_PART_QUESTION = {
    message: "Select which parts you want to add to this prototype:",
    required: false,
};
exports.SET_PROTOTYPE_ADD_MANUAL_QUESTION = {
    message: "Do you want to add a manual?",
    options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
    ],
};
exports.SET_PROTOTYPE_MANUAL = {
    message: "Enter the manual reference name:",
};
