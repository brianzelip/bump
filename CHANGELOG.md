# 1. Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.1. Unreleased

## 1.2. [1.0.0] - 2019-10-31

### 1.2.1. Meta

- branch: shipping-prep
- description: prepare the documentation for shipping

### 1.2.2. Updated

- readme.md: improve docs for shipping mvp
- undo.js: remove console.log() debugger
- strategy-handler.js: remove debuggers

## 1.3. [v0.5.1] - 2019-10-30

### 1.3.1. Meta

- branch: master
- description: add shebang to bump.js

### 1.3.2. Updated

- bump.js: Add missing shebang

## 1.4. [0.5.0] - 2019-10-30

### 1.4.1. Meta

- branch: yargs
- description: power the bump CLI with [yargs](http://yargs.js.org/)

### 1.4.2. Added

- yargs dependency
- src/ and src/modules/: create a modular system for building and handling the commands, see https://github.com/yargs/yargs/blob/master/docs/advanced.md#providing-a-command-module
- strategy.js: command module for handling the bumping logic
- undo.js: command module for handling the undo logic

### 1.4.3. Updated

- bump.js: refactor around yargs:
  - use the yargs docs heavily to define the bump cli application, including:
    - the default `bump <strategy> <message>` command that takes two required positional arguments
    - the `bump undo` command that undoes that prior bump
  - define the command builder and handlers in the src/modules/ directory

## 1.5. [0.4.0] - 2019-10-25

### 1.5.1. Meta

- branch: confirm-bump
- description: provide feedback in the terminal to the user

### 1.5.2. Added

- chalk.js as a dependency

### 1.5.3. Updated

- bump.js:
  - log out to the console upon an action event
    - Add confirm() function for logging out feedback to console
    - Add confirm() to bump()
    - Require and use chalk.js via tagged template literal, [see their docs](https://www.npmjs.com/package/chalk#usage)

## 1.6. [0.3.0] - 2019-10-23

### 1.6.1. Meta

- branch: master
- description: Prep for publishing module:

  - [x] update commit message if major bump (add 🚢 to msg)
  - [x] update README w/ mvp docs
    - [x] Install
    - [x] Use
  - [x] update README w/ references
    - [ ] update api docs
      - [ ] help menu stuff
      - [ ] prose
    - [ ] update the list of constraints of the app (the assumptions, and explicitly write what it doesn't do)
  - [x] published on npm
    - [x] rename module with scope
    - [x] update metadata (author, keywords, bugs, repository)
    - [x] use `npm publish --access public`

### 1.6.2. Updated

- changelog: Add notes on references that helped me reach v1.0.0
- readme:

## 1.7. [0.2.1] - 2019-10-20

### 1.7.1. Meta

- branch: master
- description: Add changelog.md

### 1.7.2. Added

- CHANGELOG.md

## 1.8. [0.2.0] - 2019-10-20

### 1.8.1. Meta

- branch: master
- description: Write the basic functionality for bumping package file versions and committing with an appropriate message

### 1.8.2. Added

- bump.js

## 1.9. [0.1.0] - 2019-10-19

### 1.9.1. Meta

- branch: master
- description: start project to create an automated flow for creating new releases for my node.js projects

### 1.9.2. Added

- .gitignore
- LICENSE
- README.md
- package.json
- package-lock.json
