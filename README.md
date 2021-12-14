# vite-vue2-typescript

Vite Vue2 typescript starter template using composition-api with Script Setup!

## Features


- 📦 [Global Components auto importing](./src/components/Global)

- 😃 [Script Setup](https://github.com/antfu/vue2-script-setup-transform)

- 🔥 TypeScript, of course

### Plugins

- [`vue/compositon-api`](https://github.com/vuejs/composition-api) Composition API plugin for Vue 2

- [`VueUse`](https://github.com/antfu/vueuse) - collection of useful composition APIs

- [`vite-plugin-style-import`](https://github.com/anncwb/vite-plugin-style-import) A plug-in
  that imports component library styles on demand

- [`vue2-helper`](https://github.com/ambit-tsai/vue2-helpers) - A util package to use Vue 2 with Composition API easily


## Usage

### Development

Just run and visit http://localhost:3003

```bash
yarn dev
```

## Commit lint
(removed)

This repo use `commitizen` , if run `git cz` has no effect, you might need to install commitizen global as `yarn add global commitizen` or `npm i -g commitizen`

then use `git cz` to add commit information.

At lint staged it will trigger eslint auto fix and use `pretty-quick` to format files.

And enjoy!

### Thanks

- [vitesse](https://github.com/antfu/vitesse) Opinionated Vite Starter Template
