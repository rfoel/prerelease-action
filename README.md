# prerelease-action

Publish disposable pre-releases

## Inputs

| Name            | Description                                        | Default |
| --------------- | -------------------------------------------------- | ------- |
| preid           | Pre-release id                                     | develop |
| git-tag-version | Commit and tag the version change                  | false   |
| tag             | Registers the published package with the given tag | next    |

## Usage

```yml
uses: rfoel/prerelease-action
with:
  preid: 'development'
  git-tag-version: false
  tag: 'next'
```
