import { loadFeature, describeFeature } from "@amiceli/vitest-cucumber";
import { expect } from "vitest";

const feature = await loadFeature("./features/calculator.feature");

describeFeature(feature, ({ Scenario }) => {
  Scenario("Add numbers", ({ Given, When, Then }) => {
    let a: number, b: number, result: number;

    Given("I have numbers {int} and {int}", (x, y) => {
      a = +x;
      b = +y;
    });
    When("I add them", () => {
      result = a + b;
    });
    Then("the result should be {int}", (expected) => {
      expect(result).toBe(+expected);
    });
  });
});
