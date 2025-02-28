import type { StoryObj } from "@storybook/react";
import { type ReactElement } from "react";

function Button({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">): ReactElement {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

type Story = StoryObj<typeof Button>;

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered"
  }
};

export const Default: Story = {
  args: {
    children: "Button"
  }
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  }
};
