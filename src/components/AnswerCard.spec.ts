import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AnswerCard from "./AnswerCard.vue";

describe("AnswerCard Component", () => {
  const wrapper = mount(
    {
      template: "<AnswerCard></AnswerCard>",
    },
    {
      props: {
        item: "Engorgement(WC bouchés)",
      },

      global: {
        components: { AnswerCard },
      },
    }
  );
  it("should renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
