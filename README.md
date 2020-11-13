# prerelease-action

Publish disposable pre-releases

## Inputs

| Name            | Description                                         | Default | Required |
| --------------- | --------------------------------------------------- | ------- | -------- |
| authToken       | Auth token that will be used to publish the package |         | true     |
| preid           | Pre-release id                                      | develop | false    |
| git-tag-version | Commit and tag the version change                   | false   | false    |
| tag             | Registers the published package with the given tag  | next    | false    |

## Usage

```yml
uses: rfoel/prerelease-action
with:
  authToken: ${{ secrets.NPM_TOKEN }}
  preid: 'development'
  git-tag-version: false
  tag: 'next'
```
