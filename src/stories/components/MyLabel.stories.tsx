import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabelProps } from "../../components/MyLabel";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args } />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false,
    color: 'primary',
}

export const allCaps = Template.bind({});
allCaps.args = {
    size: 'normal',
    allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    allCaps: false,
    color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    allCaps: false,
    color: 'tertiary',
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'normal',
    allCaps: false,
    color: 'tertiary',
    fontColor: '#5517ac'
}