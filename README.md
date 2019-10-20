# Bump 🍑

Automate new releases for my node.js projects by:

- bumping the version property in package\*json
- committing with appropriate message

## My release protocol

My current release protocol includes:

- git
- a [Semantic Versioning](https://semver.org/spec/v2.0.0.html) approach
- a [changelog.md](https://keepachangelog.com/en/1.0.0/)
- once a feature branch's work is finalized and documented in changelog.md:
  1. open package.json, bump the version accordingly
  2. open package-lock.json, bump the version accordingly
  3. commit with message of the form `package*: v${version} ${strategy} bump for ${message} 🎉`
  4. push to remote, and start the PR process
  5. create new tag with command of the form: `tag v${version} -m ${message}`
  6. push new tag to remote

## API

### Basic usage

```bash
> node $PATH_TO_bump.js [major || minor || patch] "$MSG"
```

### Assumptions:

- your project is git tracked
- you are following [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
- your current working directory is the root diretory of the project you wish to bump
- the root directory of the project you wish to bump includes both package.json and package-lock.json files
