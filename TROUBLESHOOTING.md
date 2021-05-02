
From `yarn storybook` logs:
> "WARN Storybook support for Create React App is now a separate preset.
WARN To use the new preset, install `@storybook/preset-create-react-app` and add it to the list of `addons` in your `.storybook/main.js` config file.
WARN The built-in preset has been disabled in Storybook 6.0."



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


Think about `peerDependencies`

- https://classic.yarnpkg.com/en/docs/cli/install/
- https://classic.yarnpkg.com/en/docs/dependency-types/


Fix up babel-loader 8.2.2 from latest @storybook packages and v8.1.0 from react-scripts.
Currently temp solution is manual devDependency as for 8.1.0