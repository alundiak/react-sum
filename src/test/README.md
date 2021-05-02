# Testing React Sum

This component is an example of using Jest/Enzyme (migrated to Jest + Testing Library) together with [Cucumber](https://github.com/cucumber/cucumber-js).


## Testing
  - https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
  - https://raygun.com/blog/mocha-vs-jasmine-chai-sinon-cucumber/


## Jest + [Enzyme](https://enzymejs.github.io/enzyme/docs/guides/jest.html)
Since May-2021, migrated from Jest/Enzyme to Jest + `@testing-library/react` approach.

**Resources**:

- https://jestjs.io/docs/en/tutorial-react
- https://blog.bitsrc.io/how-to-test-react-components-with-jest-and-enzyme-in-depth-145fcd06b90


## Jest + [Testing Library](https://testing-library.com/)

**Resources**:

- https://testing-library.com/docs/react-testing-library/migrate-from-enzyme/

    > "Enzyme's shallow wrapping doesn't descend down to sub-components, React Testing Library's render is more similar to mount."

    > "In React Testing Library, you don't need to assign the render result to a variable (wrapper, or etc), and you can simply access the rendered output by calling the screen"


## [Jest + Cucumber](https://github.com/bencompton/jest-cucumber)

- `features` folder contains Cucumber `*.feature` files, with described flows.
- `steps` folder contains `*.steps.js` files which implement logic, based on features.

**Resources**:

- https://charles-stover.medium.com/behavior-driven-react-development-with-cucumber-faf596d9d71b
- [`cucumber`](https://github.com/cucumber/cucumber-js), since 2011, 979 commits
  - [`react-cucumber`](https://github.com/pzavolinsky/react-cucumber), since 2017, 16 commits
  - [`jest-cucumber`](https://github.com/bencompton/jest-cucumber), since 2018, 153 commits
    - https://github.com/bencompton/jest-cucumber/tree/master/examples
    - https://codeburst.io/react-behavior-driven-development-bdd-535afd364e5f
    - https://github.com/stlouisweb/react-cucumber-base - good examples




## But still outstanding questions:

- What to test?
- Why to test?
- How to run?
- How to rely?
