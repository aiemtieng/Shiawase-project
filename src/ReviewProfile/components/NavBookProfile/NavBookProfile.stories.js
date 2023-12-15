import { NavBookProfile } from ".";

export default {
  title: "Components/NavBookProfile",
  component: NavBookProfile,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
  },
};
