import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ShowRating, ShowRatingProps } from '.';

export default {
    title: 'Component/Show Rating',
    component: ShowRating,
} as Meta;

const Template: Story<ShowRatingProps> = (args) => <ShowRating {...args} />;

export const Loaded = Template.bind({});
Loaded.args = {
    loading: false,
    rating: 3,
    size: 'small',
};

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
};
