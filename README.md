# prerelease-action

Publish disposable pre-releases

## Inputs

| Name            | Description                                        | Default | Required |
| --------------- | -------------------------------------------------- | ------- | -------- |
| preid           | Pre-release id                                     | develop | false    |
| git-tag-version | Commit and tag the version change                  | false   | false    |
| tag             | Registers the published package with the given tag | next    | false    |

## Usage

```yml
uses: rfoel/prerelease-action@master
with:
  preid: 'development'
  git-tag-version: false
  tag: 'next'
```
