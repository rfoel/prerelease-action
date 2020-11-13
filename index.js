const fs = require('fs')
const path = require('path')
const { exec } = require('@actions/exec')
const { getInput } = require('@actions/core')

fs.writeFileSync(
  path.join(process.env.HOME || '~', '.npmrc'),
  `//registry.npmjs.org/:_authToken=${getInput('authToken')}`,
)

const version = ({ preid, gitTagVersion }) =>
  exec('npm', [
    'version',
    'prerelease',
    `--preid=${preid}`,
    `--git-tag-version=${gitTagVersion}`,
  ])

const publish = ({ tag }) => exec('npm', ['publish', '--tag', tag])

const run = async () => {
  try {
    await version({
      preid: getInput('preid'),
      gitTagVersion: getInput('git-tag-version'),
    })
    await publish({ tag: getInput('tag') })
  } catch (error) {
    console.log(error)
    run()
  }
}

run()
