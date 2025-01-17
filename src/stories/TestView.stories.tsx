import type { Meta, StoryObj } from "@storybook/react";
import TestView from "../components/TestView";

const meta: Meta<typeof TestView> = {
  title: "Components/TestView",
  component: TestView,
};

export default meta;

type Story = StoryObj<typeof TestView>;

export const Primary: Story = {
  args: {
    header: "Sample Header",
  },
};
