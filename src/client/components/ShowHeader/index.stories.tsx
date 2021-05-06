import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ShowHeader, ShowHeaderProps } from '.';

export default {
    title: 'Component/Show Header',
    component: ShowHeader,
} as Meta;

const Template: Story<ShowHeaderProps> = (args) => <ShowHeader {...args} />;

export const Loaded = Template.bind({});
Loaded.args = {
    loading: false,
    id: 1,
    // pictureUrl: 'https://placeimg.com/640/480/tech',
    pictureUrl: 'https://static.tvmaze.com/uploads/images/medium_portrait/302/755260.jpg',
    name: "This is the title of the TV show which is very long isn't it",
    rating: 3,
    synopsis:
        'Hinc ille commotus ut iniusta perferens et indigna praefecti custodiam protectoribus mandaverat fidis. quo conperto Montius tunc quaestor acer quidem sed ad lenitatem propensior, consulens in commune.',
};

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
};
