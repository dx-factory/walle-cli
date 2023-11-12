"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GITIGNORE_QUESTION = exports.PROJECT_ENTRYPOINT_QUESTION = void 0;
exports.PROJECT_ENTRYPOINT_QUESTION = {
    message: "Which will be the entry point of your project?",
    placeholder: ".",
    validate: function (value) {
        if (value === "")
            return "The entry point can't be empty";
    },
};
exports.GITIGNORE_QUESTION = {
    message: "Do you want to add the walle configuration file to .gitignore?",
    options: [
        { label: "Yes", value: true, hint: "Recommended" },
        { label: "No", value: false },
    ],
};
