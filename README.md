# Bump

Automate new releases for my node.js projects by:

- bumping the version property in package\*json
- committing with message and pushing

## Release protocol

Leading up to this project, my release protocol includes:

- git
- a [Semantic Versioning](https://semver.org/spec/v2.0.0.html) approach
- a [changelog.md](https://keepachangelog.com/en/1.0.0/)
- once a feature branch's work is finalized and documented in changelog.md:
  1. open package.json, bump the version accordingly
  2. open package-lock.json, bump the version accordingly
  3. commit with message of the form `package*: v${version} ${strategy} bump for ${message} 🎉`
  4. push to remote, and start the PR process
