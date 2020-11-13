const fs = require('fs')
const path = require('path')
const { exec } = require('@actions/exec')
const { getInput } = require('@actions/core')

fs.writeFileSync(
  path.join(process.env.GITHUB_WORKSPACE, '.npmrc'),
  `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}`,
)

let error
const options = {
  listeners: {
    stderr: data => {
      error += data.toString()
    },
  },
}

const version = ({ preid, gitTagVersion }) =>
  exec('npm', [
    'version',
    'prerelease',
    `--preid=${preid}`,
    `--git-tag-version=${gitTagVersion}`,
  ])

const publish = ({ tag }) => exec('npm', ['publish', '--tag', tag], options)

const run = async () => {
  try {
    await version({
      preid: getInput('preid'),
      gitTagVersion: getInput('git-tag-version'),
    })
    await publish({ tag: getInput('tag') })
  } catch {
    console.log({ error })
  }
}

run()
