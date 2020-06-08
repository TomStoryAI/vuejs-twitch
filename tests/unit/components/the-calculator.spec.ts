import { shallowMount } from "@vue/test-utils";
import TheCalculator from "@/components/TheCalculator.vue";

function simpleTestCase(calculation: string, result: string) {
  const wrapper = shallowMount(TheCalculator) as any;
  wrapper.vm.message = calculation;
  wrapper.vm.calcResult(undefined);
  expect(wrapper.vm.message).toBe(result);
}

describe("Calculations", () => {
  it("performs basic addition", () => {
    simpleTestCase("1+1", "2");
  });

  it("performs basic multi-addition", () => {
    simpleTestCase("1+1+1+1", "4");
  });

  it("performs basic subtraction", () => {
    simpleTestCase("1-1", "0");
  });

  it("performs basic subtraction and addition", () => {
    simpleTestCase("-1+1", "0");
  });

  it("performs basic multi-subtraction", () => {
    simpleTestCase("10-10-99", "-99");
  });
});
