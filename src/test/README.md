# Testing React Sum

This component is an example of using Jest/Enzyme (migrated to Jest + Testing Library) together with [Cucumber](https://github.com/cucumber/cucumber-js).

## Jest + [Enzyme](https://enzymejs.github.io/enzyme/docs/guides/jest.html) || [Testing Library](https://testing-library.com/)
Since May-2021, migrated from Jest/Enzyme to Jest + `@testing-library/react` approach.

- https://testing-library.com/docs/react-testing-library/migrate-from-enzyme/

    > "Enzyme's shallow wrapping doesn't descend down to sub-components, React Testing Library's render is more similar to mount."

    > "In React Testing Library, you don't need to assign the render result to a variable (wrapper, or etc), and you can simply access the rendered output by calling the screen"

## [Jest + Cucumber](https://github.com/bencompton/jest-cucumber)

- `features` folder contains Cucumber `*.feature` files, with described flows.
- `steps` folder contains `*.steps.js` files which implement logic, based on features.

+ https://charles-stover.medium.com/behavior-driven-react-development-with-cucumber-faf596d9d71b

## But still outstanding questions:

- What to test?
- Why to test?
- How to run?
- How to rely?
