import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'lg'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
}