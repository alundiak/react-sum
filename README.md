# React Sum

**NOTE:** component is under re-development, so new upcoming versions might be breaking-change-like.

Experimental ReactJS component to show sum of 2 numbers.

Experiment related to Component creation process and usage of tools, such as: npm/yarn, ESLINT, Webpack, Babel, Create React App, CSS Modules (migrated from LESS) React Scripts, Storybook, Jest, Enzyme, Cucumber and CI tool Circle CI.

<!-- https://circleci.com/docs/2.0/status-badges/ -->
<!--
  https://shields.io/category/build
	/circleci/build/:vcsType/:user/:repo/:branch*?token=abc123def456
-->
<!-- [![CircleCI](https://circleci.com/gh/alundiak/react-sum.svg?style=svg)](https://circleci.com/gh/alundiak/react-sum/) -->
<!-- From https://badge.fury.io/for/js/ -->

[![npm version](https://badge.fury.io/js/%40lundiak%2Freact-sum.svg)](https://badge.fury.io/js/%40lundiak%2Freact-sum)
[![TravisCI](https://travis-ci.org/alundiak/react-sum.svg?branch=master)](https://travis-ci.org/alundiak/react-sum)
[![CircleCI](https://img.shields.io/circleci/build/gh/alundiak/react-sum/master?style=social&token=610705375b4f81983b225e2655524a7154988d6e)](https://app.circleci.com/pipelines/github/alundiak/react-sum?branch=master)
[![SemaphoreCI 2.0 Build Status](https://alundiak.semaphoreci.com/badges/react-sum/branches/master.svg?key=ef261846-bd66-4474-be5c-e2daebc35350)](https://alundiak.semaphoreci.com/projects/react-sum)
[![AppVeyorCI](https://ci.appveyor.com/api/projects/status/selytkekkws81f3v?svg=true)](https://ci.appveyor.com/project/alundiak/react-sum)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Falundiak%2Freact-sum.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Falundiak%2Freact-sum?ref=badge_shield)

<!--
![CircleCI svg](https://circleci.com/gh/alundiak/react-sum/tree/master/?style=svg)](https://app.circleci.com/pipelines/github/alundiak/react-sum?branch=master)

[![CircleCI shield](https://circleci.com/gh/alundiak/react-sum/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/alundiak/react-sum?branch=master)
-->

## Consumer Usage

### Installation

- `yarn add @lundiak/react-sum`
- `npm install --save @lundiak/react-sum`

### Usage

Import the component where you want to use it, and you ready to use it.

- `import ReactSum from '@lundiak/react-sum'` for `<ReactSum.Sum />` usage.

or

- `import { Sum } from '@lundiak/react-sum';` for `<Sum />` usage.

### Props

| _Prop_ | _Description_ | _Default value_ |
| ------ | :-----------: | :-------------: |
| a      |       a       |   `undefined`   |
| b      |       b       |   `undefined`   |

### Optional props

| _Prop_    |             _Description_             | _Default value_ |
| --------- | :-----------------------------------: | :-------------: |
| useImages |       renders Sum sign as Image       |     `false`     |
| useASCII  | renders Sum sign as ASCII Math symbol |     `false`     |

### Example

How to add to your file `MyApp.jsx`:

```jsx
import { Sum } from "@lundiak/react-sum";

export const MyApp = () => {
  return <Sum a={2} b={3} />;
};
```

## Development

**2025**

- Decided to use only `npm`
- Upgraded to latest `react` v19.x
- Migrated from CRA + `react-scripts` to [Vite](https://vitejs.dev/)
  - Also migrated to [Vitest](https://vitest.dev/) maybe partially with `@testing-library/react`. Used hints from [here](https://github.com/vitest-dev/vitest/tree/main/examples/react).
  - Also migrated `jest-cucumber` to `@amiceli/vitest-cucumber` to work with `vitest`
- Migrated to ESLINT v9 (via `npm init @eslint/config@latest`) - [guide](https://eslint.org/docs/latest/use/getting-started)
- And also added `@vitest/eslint-plugin` (because legacy `eslint-plugin-vitest` refers to eslint v8).
- Re-Bootstrap with `npm create vite@latest`
- Replaced old [Storybook](https://github.com/storybookjs/storybook) approach by new [Ladle](https://ladle.dev/) :)
- As of July-2025 [ascii-math](https://github.com/ForbesLindesay/ascii-math) remains built as pure JavaScript referring deep inside to MathML. And for TypeScript project there is no typings.
  - So I created `ascii-math.d.ts` => `declare module "ascii-math";` to suppress TypeScript error.
  - Also maybe will replace by [asciimath-parser](https://github.com/widcardw/asciimath-parser) with [KaTeX](https://katex.org/) aka [katex](https://github.com/KaTeX)
    - but KaTeX brings lot of fonts into `dist` after `npm run build`

TODO

- Export typings also (need to enable declaration in tsconfig and expose `*.d.ts` files and then test externally/separately)

**2021**

[README](./_2021/README_2021.md)
