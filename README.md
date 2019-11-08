# Bump 🍑

![GitHub package.json version](https://img.shields.io/github/package-json/v/brianzelip/bump)

Automate new releases for node.js projects on the command line.

A _new release_ is defined as:

1. An incremental increase to the version property in the package.json and package-lock.json files.
2. A commit of the two json files with a descriptive message about the reason for the version bump.
3. The optional creation of a tag with a descriptive message.

## Install

```bash
npm install --global @bzelip/bump
```

This will install bump globally so that it can be run from the command line.

## Use

There are two main commands:

1. `bump <strategy> <message>`
2. `bump undo`

### bump

Bump your version based on a strategy, and include a description of the reason for the bump in the generated commit message.

```bash
bump <strategy> <message>
```

<dl>
  <dt><code>strategy</code> (string, required)</dt>
  <dd><em>strategy for the version bump</em></dd>
  <dd>Choices:

- <code>major</code>
- <code>minor</code>
- <code>patch</code>

    </dd>

    <dt><code>message</code> (string, required)</dt>
    <dd><em>description of the reason for the version bump, to be appended to the generated commit message</em></dd>
  </dl>

#### Example

##### Input

```bash
# current version 0.4.0

bump minor "create custom slider"
```

##### Output

```bash
🍑: Successfully minor bumped version to 0.5.0 with the commit message:

"package*: v0.5.0 Bump minor for create custom slider 🎉"
```

**Note** `bump` does not push, it only commits locally.

### undo

Undo a bump.

```bash
bump undo
```

This command is an alias for running:

```bash
git reset HEAD~

git checkout -- package*
```

**Note** Be sure to only use `bump undo` immediately after `bump <strategy> <message>` to have the desired action.

## Assumptions

- your project is git tracked
- you are following [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
- your current working directory includes both package.json and package-lock.json files

## TODO

- [ ] add the create tag with message option
- [ ] add tests

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
8. [How to use yargs](https://www.youtube.com/watch?v=Lz485E65ce4)
9. [My accepted answer to a yargs question on !SO](https://stackoverflow.com/a/58606424/2145103)
