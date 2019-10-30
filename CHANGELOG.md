# 1. Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.1. Unreleased

### 1.1.1. Meta

- branch: v1
- description: Ship v1 🚢

### 1.1.2. Updated

- readme
  - [x] add global install
  - [x] update references ()
    - https://docs.npmjs.com/creating-and-publishing-scoped-public-packages#publishing-scoped-public-packages
    - https://docs.npmjs.com/files/package.json.html
  - [x] add TODO section, include:
    - add the ability to add tag, which means set some flags, which means adjust bump.js to allow for setting flags
- bump.js
  - [x] add a console.log() of the generated commit message for user feedback, instead of just dropping the user off at their prompt with no evidence that anything happend until the user `git log`s or `git status`es.
  - [x] add undo function that basically runs `git reset HEAD~ && git checkout -- package*`

## 1.2. [v0.5.0] - 2019-10-27

### 1.2.1. Meta

- branch: yargs
- description: power the bump CLI with [yargs](http://yargs.js.org/)

### 1.2.2. Added

- yargs dependency
- src/ and src/modules/: create a modular system for building and handling the commands, see https://github.com/yargs/yargs/blob/master/docs/advanced.md#providing-a-command-module
- strategy.js: command module for handling the bumping logic
- undo.js: command module for handling the undo logic

### 1.2.3. Updated

- bump.js: refactor around yargs:
  - use the yargs docs heavily to define the bump cli application, including:
    - the default `bump <strategy> <message>` command that takes two required positional arguments
    - the `bump undo` command that undoes that prior bump
  - define the command builder and handlers in the src/modules/ directory

## 1.3. [0.4.0] - 2019-10-25

### 1.3.1. Meta

- branch: confirm-bump
- description: provide feedback in the terminal to the user

### 1.3.2. Added

- chalk.js as a dependency

### 1.3.3. Updated

- bump.js:
  - log out to the console upon an action event
    - Add confirm() function for logging out feedback to console
    - Add confirm() to bump()
    - Require and use chalk.js via tagged template literal, [see their docs](https://www.npmjs.com/package/chalk#usage)

## 1.4. [0.3.0] - 2019-10-23

### 1.4.1. Meta

- branch: master
- description: Prep for publishing module:

  - [x] update commit message if major bump (add 🚢 to msg)
  - [x] update README w/ mvp docs
    - [x] Install
    - [x] Use
  - [x] update README w/ references
  - [x] published on npm
    - [x] rename module with scope
    - [x] update metadata (author, keywords, bugs, repository)
    - [x] use `npm publish --access public`

### 1.4.2. Updated

- changelog: Add notes on references that helped me reach v1.0.0

## 1.5. [0.2.1] - 2019-10-20

### 1.5.1. Meta

- branch: master
- description: Add changelog.md

### 1.5.2. Added

- CHANGELOG.md

## 1.6. [0.2.0] - 2019-10-20

### 1.6.1. Meta

- branch: master
- description: Write the basic functionality for bumping package file versions and committing with an appropriate message

### 1.6.2. Added

- bump.js

## 1.7. [0.1.0] - 2019-10-19

### 1.7.1. Meta

- branch: master
- description: start project to create an automated flow for creating new releases for my node.js projects

### 1.7.2. Added

- .gitignore
- LICENSE
- README.md
- package.json
- package-lock.json
