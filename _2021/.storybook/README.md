# Storybook vs. Style Guide vs. Documentation

**Storybook**

- [Guide for setup](https://storybook.js.org/docs/guides/guide-react/)
- [Writing Storybook Stories](https://storybook.js.org/docs/basics/writing-stories/)
- [Storybook examples](https://github.com/storybookjs/storybook/tree/next/examples)

2021 setup.
- https://storybook.js.org/docs/react/get-started/install


- `sb init --type react` (goes kinda better with latest setup for `.storybook` (main.js + preview.js)). Goes as "React app".
- `sb init --type react_project` (goes kinda better with latest setup for `.storybook` (main.js + preview.js)). Goes as "React library".
- `sb init --type react_scripts` (goes kinda wrong with deprecated setup for `.storybook` (addons.js + config.js))

To run locally:

- `yarn storybook`
- `npm run storybook`

To build for bundle:
- `yarn build-storybook`
- `npm run build-storybook`

**Storybook Addons**
- https://github.com/tuchk4/storybook-readme
- https://www.npmjs.com/package/@storybook/addon-storysource (alternative to [storybook-addon-jsx](https://www.npmjs.com/package/storybook-addon-jsx))

**Docz** and **Styleguidist** and other
- https://css-tricks.com/front-end-documentation-style-guides-and-the-rise-of-mdx/
