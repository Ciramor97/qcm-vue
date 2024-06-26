import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import InterventionInfo from "../InterventionInfo.vue";
import EuroIcon from "../icons/EuroIcon.vue";

describe("InterventionInfo Component", () => {
  const wrapper = mount(
    {
      template: "<InterventionInfo></InterventionInfo>",
    },
    {
      props: {
        icon: EuroIcon,
        label: "Entre 150€ et 300€ TTC",
        bgColor: "FF445F",
        hoverBgColor: "#FFF",
      },

      global: {
        components: { InterventionInfo },
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
