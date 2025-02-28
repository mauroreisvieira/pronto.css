import type { StoryObj } from "@storybook/react";
import { type ReactElement } from "react";

function Input({ children, ...props }: React.ComponentPropsWithoutRef<"input">): ReactElement {
  return <input {...props} />;
}

type Story = StoryObj<typeof Input>;

export default {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered"
  }
};

export const Default: Story = {
  args: {
    name: "input",
    placeholder: "Enter username..."
  }
};

export const Disabled: Story = {
  args: {
    name: "input",
    placeholder: "Enter username...",
    disabled: true
  }
};
