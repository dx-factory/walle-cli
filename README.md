# walle-cli

Your CLI project organizer.

## Installation

To install Walle CLI, you only need to execute the following command with NPM.

```
npm install -g walle-cli
```

## Guide

To be able to start using Walle CLI on your project, you need to create a **configuration file**.

To achieve this, you can either create a blank configuration file using:

```
walle init
```

or fetch an online config using:

```
walle fetch <config_url>
```

## Commands

Here is the list of available commands:

| Command  | Description                                                                                                                                                                                                                   | Syntax                                                              |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `init`   | Creates a blank walle.config.json file in the working directory.<br></br> You will be able to decide the entrypoint where you want walle to act and other options as adding walle config to gitignore. .                      | `walle init`                                                        |
| `fetch`  | Gets a remote walle config from a provided url.                                                                                                                                                                               | `walle fetch <config_url>`                                          |
| `sketch` | Creates a folder structure from a prototype in the config file. To create one, you need to add the prototype reference name and an optional name for the folder structure.                                                    | `walle sketch <prototype_ref> <(optional) custom_name>`             |
| `make`   | Creates a manual instructions from a manual in the config file. To create one, first you need to sketch the folder(s) that contain(s) the manual reference and, therefore, execute this command with all custom instructions. | `walle make <path[]> <custom_manual_name> <instruction_triggers[]>` |
| `design` | Lets you design new prototypes and manuals in the config file. In this version you can **ONLY CREATE** new prototypes and manuals.                                                                                            | `walle design`                                                      |
