# WDYD - What Did You Do?

[![npm](https://badge.fury.io/js/wdyd.svg)](http://badge.fury.io/js/wdyd)

A node CLI utility to write via CLI & Interactive interface great commit message (conventional commit guidelines).

This utility will guide you to create a great commit message, body & footer following the Conventional Commits guideline.
Communication & transparancy is the key when you are working in an AGILE env or in a team.


# Goal

Increase the knoledge across the community and the opensource world for the [conventional commits standard](https://www.conventionalcommits.org/en/v1.0.0/).

# Getting Started

## Installation 

`npm i -g wdyd`

## How to use it

Go to your project directory, add your changes via `git add` command.

There are two mode to run WDYD: interactive and manual.

### Interactive

Run the following command:

`wdyd interactive`

It will ask you couple of questions regarding what did you do in your projects, what have you changed and why, as follow:
```
- What scope did you focus on?
- Describe your change in an emperative way:
- Include the motivation for the change and contrast this with previous behavior:
- Type The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes:
```

At the end of the questions it will generate a commit printing out the stdout.

### Manual

Run the following command to get a list of commands:
`wdyd -h`

```
Usage: wdyd [options] [command]

What Did You Did - A node CLI utility to write via interface great commit message (conventional commit guidelines)

Options:
  -V, --version                               output the version number
  -h, --help                                  display help for command

Commands:
  build <scope> <subject> [body] [footer]     Changes that affect the build system or external dependencies (example scopes:
                                              gulp, broccoli, npm)
  chore <scope> <subject> [body] [footer]     Upgrading, migrating, deprecating a dependency or packages
  ci <scope> <subject> [body] [footer]        Changes to our CI configuration files and scripts (example scopes: Travis,
                                              Circle, BrowserStack, SauceLabs)
  docs <scope> <subject> [body] [footer]      Documentation only changes
  feat <scope> <subject> [body] [footer]      A new feature
  fix <scope> <subject> [body] [footer]       A bug fix
  perf <scope> <subject> [body] [footer]      A code change that improves performance
  refactor <scope> <subject> [body] [footer]  A code change that neither fixes a bug nor adds a feature
  revert <scope> <subject> [body] [footer]    Going back specifying what went wrong and when
  style <scope> <subject> [body] [footer]     Changes that do not affect the meaning of the code (white-space, formatting,
                                              missing semi-colons, etc)
  test <scope> <subject> [body] [footer]      Adding missing tests or correcting existing tests
  interactive                                 Create your commit in a interactive env
  help [command]                              display help for command

```

In order to get a command documentation you can run:

`wdyd build -h`

**Example**

Let's say I made some changes on a new feature:

`wdyd feat api 'add user auth services'`

Or, if I need to update a dependency that might lead to some deprecations:

`wdyd chore '!deps' 'upgrade to react18' 'Alignment with other microfrontends repositories' 'BREAKING CHANGE: no more class components'`

# Notes

A lot of references are taken from conventional commits projects & plugin for VSCode.

# Author

[@thejoin95](https://github.com/thejoin95)
