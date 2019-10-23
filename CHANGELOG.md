# 1. Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.1. [1.0.0] - 2019-10-2

### Meta

- branch: v1
- description: Ship v1 🚢

### Updated

- readme
  - [ ] add global install
  - [ ] update references ()
    - https://docs.npmjs.com/creating-and-publishing-scoped-public-packages#publishing-scoped-public-packages
    - https://docs.npmjs.com/files/package.json.html
  - [ ] add TODO section, include:
    - add the ability to add tag, which means set some flags, which means adjust bump.js to allow for setting flags
- bump.js
  - [ ] add a console.log() of the generated commit message for user feedback, instead of just dropping the user off at their prompt with no evidence that anything happend until the user `git log`s or `git status`es.

## 1.1. [0.3.0] - 2019-10-23

### 1.1.1. Meta

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

### 1.1.2. Updated

- changelog: Add notes on references that helped me reach v1.0.0

## 1.2. [0.2.1] - 2019-10-20

### 1.2.1. Meta

- branch: master
- description: Add changelog.md

### 1.2.2. Added

- CHANGELOG.md

## 1.3. [0.2.0] - 2019-10-20

### 1.3.1. Meta

- branch: master
- description: Write the basic functionality for bumping package file versions and committing with an appropriate message

### 1.3.2. Added

- bump.js

## 1.4. [0.1.0] - 2019-10-19

### 1.4.1. Meta

- branch: master
- description: start project to create an automated flow for creating new releases for my node.js projects

### 1.4.2. Added

- .gitignore
- LICENSE
- README.md
- package.json
- package-lock.json
