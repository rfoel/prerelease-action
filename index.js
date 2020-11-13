const { exec } = require('@actions/exec')
const { getInput } = require('@actions/core')

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
