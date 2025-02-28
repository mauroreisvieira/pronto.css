import type { StoryObj } from "@storybook/react";
import { type ReactElement } from "react";

function Select({ children, ...props }: React.ComponentPropsWithoutRef<"select">): ReactElement {
  return <select {...props}>{children}</select>;
}

type Story = StoryObj<typeof Select>;

export default {
  title: "Example/Select",
  component: Select,
  parameters: {
    layout: "centered"
  }
};

export const Default: Story = {
  args: {
    children: (
      <>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
        <option value={4}>Option 4</option>
      </>
    )
  }
};
