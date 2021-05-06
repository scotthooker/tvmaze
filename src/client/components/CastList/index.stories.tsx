import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CastList, CastListProps } from '.';

export default {
    title: 'Component/Cast List',
    component: CastList,
} as Meta;

const Template: Story<CastListProps> = (args) => <CastList {...args} />;

export const Loaded = Template.bind({});
Loaded.args = {
    loading: false,
    title: 'Who is in the show',
    members: [
        {
            name: 'Adrian Dunbar',
            character: 'Superintendent Edward "Ted" Hastings',
            pictureURL: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/10956.jpg',
        },
        {
            name: 'Martin Compston',
            character: 'DS Steve Arnott',
            pictureURL: 'https://static.tvmaze.com/uploads/images/medium_portrait/53/133392.jpg',
        },
        {
            name: 'Vicky McClure',
            character: 'DS Kate Fleming',
            pictureURL: 'https://static.tvmaze.com/uploads/images/medium_portrait/133/333741.jpg',
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
};
