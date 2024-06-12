import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import OrderItem from "../OrderItem.vue";

describe("OrderItem Component", () => {
  const wrapper = mount(
    {
      template: "<OrderItem></OrderItem>",
    },
    {
      props: {
        order: {
          _id: "666850cf0ee49d4d7e8c055d",
          userInfos: {
            firstname: "POP",
            lastname: "POP",
          },
          createdAt: "2024-06-11T13:27:43.880Z",
        },
      },

      global: {
        components: { OrderItem },
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
