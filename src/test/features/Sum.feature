Feature: Sum

Scenario: adds x and y to equal sum
  Given x is 2 and y is 2
  When component rendered
  Then with result 4

Scenario Outline: adds x and y to equal sum (multiple use cases)
  Given x is <x> and y is <y>
  When component rendered
  Then with result <sum>

  Examples:
    | x | y | sum |
    | 1 | 2 | 3 |
    | 0 | 1 | 1 |
    | 1 | 0 | 1 |
    | 1 | 0 | 1 |
    | -1 | 1 | 0 |
    | 2 | -1 | 1 |
    | 2 | -2 | 0 |
    | 2 | -3 | -1 |