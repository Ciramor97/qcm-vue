import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import HomeCard from "../HomeCard.vue";
import Plomberie from "../icons/Plomberie.vue";

describe("HomeCard Component", () => {
  const wrapper = mount(
    {
      template: "<HomeCard></HomeCard>",
    },
    {
      props: {
        icon: Plomberie,
        title: "Plomberie",
        bgColor: "FF445F",
        hoverBgColor: "#FFF",
      },

      global: {
        components: { HomeCard },
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
