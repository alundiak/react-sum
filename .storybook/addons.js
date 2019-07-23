import '../addons/register'; // custom addon
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';

// import '@storybook/addon-docs/register';

// register the notes addon as a tab
import '@storybook/addon-notes/register';
// or register the notes addon as a panel. Only one can be used!
// import '@storybook/addon-notes/register-panel';

// Seems OK, but cons:
// 1) requires webpack.config.js
// 2) can't handle .md, .png imports.
// 3) requires @storybook/source-loader
import '@storybook/addon-storysource/register';