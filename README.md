# Bump 🍑

Automate new releases for my node.js projects by:

- bumping the version property in package\*json
- committing with appropriate message

## Install

```bash
> npm install --global @bzelip/bump
```

## API

```bash
> bump $TYPE "$MSG"
```

<dl>
  <dt><code>TYPE</code></dt>
  <dd>string; one of the following strings: <code>major</code>, <code>minor</code>, <code>patch</code>
  </dd>
  <dt><code>MSG</code></dt>
  <dd>string</dd>
</dl>

### Example

#### Input

```bash
# @v0.4.0

> bump minor "create custom slider"
```

#### Output

```bash
🍑 : Successfully minor bumped version to 0.5.0 with the commit message:

"package*: v0.5.0 Bump minor for create custom slider 🎉 "
```

**Note** `bump` does not push, it only commits locally.

### Assumptions

- your project is git tracked
- you are following [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
- your current working directory is the root diretory of the project you wish to bump
- the root directory of the project you wish to bump includes both package.json and package-lock.json files

## TODO

- [ ] implement yargs
- [ ] add the ability to add tag
- [ ] add undo function that basically runs `git reset HEAD~ && git checkout -- package*`

## My release protocol

My current release protocol includes:

- git
- a [Semantic Versioning](https://semver.org/spec/v2.0.0.html) approach
- a [changelog.md](https://keepachangelog.com/en/1.0.0/)
- once a feature branch's work is finalized and documented in changelog.md:
  1. open package.json, bump the version accordingly
  2. open package-lock.json, bump the version accordingly
  3. commit with message of the form `package*: v${version} ${strategy} bump for ${message} 🎉`
  4. TODO: create new tag with command of the form: `tag v${version} -m ${message}`
  5. push to remote, and start the PR process (do this manually after bump.js)
  6. push new tag to remote (do this manually after bump.js)

## References

1. [How do I prompt users for input from a command-line script?](https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/)
2. [Execute a command line binary with Node.js](https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js#20643568)
3. [node.child_process.exec code examples](https://nodejs.org/docs/v8.1.4/api/child_process.html#child_process_child_process_exec_command_options_callback)
4. [How to append to New Line in Node.js](https://stackoverflow.com/a/32658744/2145103)
5. [node.os.EOL](https://nodejs.org/api/os.html#os_os_eol)
6. [package.json](https://docs.npmjs.com/files/package.json.html)
7. [publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages#publishing-scoped-public-packages)
