## Getting started

```
npm install --save-dev eslint @grupa-pracuj/eslint-config-cracow
```

---

`.eslintrc`

```javascript
{
  "extends": "@grupa-pracuj/eslint-config-cracow"
}
```

---

## New changes and updating version

`npm run version` bumps the version in `package.json` and creates a new git tag,
later just type `git push[...] & npm publish`.
