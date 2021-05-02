# Issues

## Problem 1

From `yarn storybook` logs:
> "WARN Storybook support for Create React App is now a separate preset.
WARN To use the new preset, install `@storybook/preset-create-react-app` and add it to the list of `addons` in your `.storybook/main.js` config file.
WARN The built-in preset has been disabled in Storybook 6.0."


## Problem 2

After migrating to `@storybook/preset-create-react-app` => `.storybook/addons.js`
```
using description file: /Users/alund/prj/react-sum/package.json (relative path: ./src/stories)
    Field 'browser' doesn't contain a valid alias configuration
    using description file: /Users/alund/prj/react-sum/package.json (relative path: ./src/src/components/Sum)
      no extension
        Field 'browser' doesn't contain a valid alias configuration
        /Users/alund/prj/react-sum/src/src/components/Sum doesn't exist
      .web.mjs
        Field 'browser' doesn't contain a valid alias configuration
        /Users/alund/prj/react-sum/src/src/components/Sum.web.mjs doesn't exist
      .mjs
        Field 'browser' doesn't contain a valid alias configuration
        /Users/alund/prj/react-sum/src/src/components/Sum.mjs doesn't exist
      .web.js
        Field 'browser' doesn't contain a valid alias configuration
        /Users/alund/prj/react-sum/src/src/components/Sum.web.js doesn't exist
      .js
        Field 'browser' doesn't contain a valid alias configuration
        /Users/alund/prj/react-sum/src/src/components/Sum.js doesn't exist
      .json
        Field 'browser' doesn't contain a valid alias configuration
        /Users/alund/prj/react-sum/src/src/components/Sum.json doesn't exist
      .web.jsx
        Field 'browser' doesn't contain a valid alias configuration
        /Users/alund/prj/react-sum/src/src/components/Sum.web.jsx doesn't exist
      .jsx
        Field 'browser' doesn't contain a valid alias configuration
        /Users/alund/prj/react-sum/src/src/components/Sum.jsx doesn't exist
      as directory
        /Users/alund/prj/react-sum/src/src/components/Sum doesn't exist

```


## Problem 3
Think about `peerDependencies`

- https://classic.yarnpkg.com/en/docs/cli/install/
- https://classic.yarnpkg.com/en/docs/dependency-types/


## Problem 4
Fix up babel-loader 8.2.2 from latest @storybook packages and v8.1.0 from react-scripts.
Currently temp solution is manual devDependency as for 8.1.0


## Problem 5

Addons Info and Notes

```
info => Loading presets
ERR! Addon value should end in /register OR it should be a valid preset https://storybook.js.org/docs/react/addons/writing-presets/
ERR! @storybook/addon-notes
WARN   Failed to load preset: {"name":"/Users/alund/prj/react-sum/node_modules/@storybook/addon-info/dist/index.js","type":"presets"} on level 1
ERR! /Users/alund/prj/react-sum/node_modules/react-syntax-highlighter/dist/esm/languages/prism/jsx.js:1
ERR! import jsx from "refractor/lang/jsx.js";
ERR! ^^^^^^
ERR!
ERR! SyntaxError: Cannot use import statement outside a module
ERR!     at Object.compileFunction (node:vm:355:18)
ERR!     at wrapSafe (node:internal/modules/cjs/loader:1038:15)
ERR!     at Module._compile (node:internal/modules/cjs/loader:1072:27)
ERR!     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
ERR!     at Module.load (node:internal/modules/cjs/loader:988:32)
ERR!     at Function.Module._load (node:internal/modules/cjs/loader:828:14)
ERR!     at Module.require (node:internal/modules/cjs/loader:1012:19)
ERR!     at require (node:internal/modules/cjs/helpers:93:18)
ERR!     at Object.<anonymous> (/Users/alund/prj/react-sum/node_modules/@storybook/addon-info/node_modules/@storybook/components/dist/syntaxhighlighter/syntaxhighlighter.js:60:35)
ERR!     at Module._compile (node:internal/modules/cjs/loader:1108:14)
ERR!     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
ERR!     at Module.load (node:internal/modules/cjs/loader:988:32)
ERR!     at Function.Module._load (node:internal/modules/cjs/loader:828:14)
ERR!     at Module.require (node:internal/modules/cjs/loader:1012:19)
ERR!     at require (node:internal/modules/cjs/helpers:93:18)
ERR!     at Object.<anonymous> (/Users/alund/prj/react-sum/node_modules/@storybook/addon-info/node_modules/@storybook/components/dist/index.js:246:26)
ERR!  /Users/alund/prj/react-sum/node_modules/react-syntax-highlighter/dist/esm/languages/prism/jsx.js:1
ERR! import jsx from "refractor/lang/jsx.js";
ERR! ^^^^^^
ERR!
ERR! SyntaxError: Cannot use import statement outside a module
ERR!     at Object.compileFunction (node:vm:355:18)
ERR!     at wrapSafe (node:internal/modules/cjs/loader:1038:15)
ERR!     at Module._compile (node:internal/modules/cjs/loader:1072:27)
ERR!     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
ERR!     at Module.load (node:internal/modules/cjs/loader:988:32)
ERR!     at Function.Module._load (node:internal/modules/cjs/loader:828:14)
ERR!     at Module.require (node:internal/modules/cjs/loader:1012:19)
ERR!     at require (node:internal/modules/cjs/helpers:93:18)
ERR!     at Object.<anonymous> (/Users/alund/prj/react-sum/node_modules/@storybook/addon-info/node_modules/@storybook/components/dist/syntaxhighlighter/syntaxhighlighter.js:60:35)
ERR!     at Module._compile (node:internal/modules/cjs/loader:1108:14)
ERR!     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
ERR!     at Module.load (node:internal/modules/cjs/loader:988:32)
ERR!     at Function.Module._load (node:internal/modules/cjs/loader:828:14)
ERR!     at Module.require (node:internal/modules/cjs/loader:1012:19)
ERR!     at require (node:internal/modules/cjs/helpers:93:18)
ERR!     at Object.<anonymous> (/Users/alund/prj/react-sum/node_modules/@storybook/addon-info/node_modules/@storybook/components/dist/index.js:246:26)
info Found existing addon {"name":"@storybook/addon-docs","options":{"configureJSX":true}}, skipping.
info Found existing addon "@storybook/addon-actions", skipping.

```