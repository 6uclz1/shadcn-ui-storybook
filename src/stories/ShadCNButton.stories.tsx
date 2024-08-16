import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    children: "Loading...",
    disabled: true,
  },
}

export const AsLink: Story = {
  args: {
    variant: "link",
    asChild: true,
    children: <a href="https://example.com">Link to Example</a>,
  },
}