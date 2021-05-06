import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ShowCard, ShowCardProps } from '.';

import checkCard from '../../images/755260.jpg';

export default {
    title: 'Component/Show Card',
    component: ShowCard,
    argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const Template: Story<ShowCardProps> = (args) => <ShowCard {...args} />;

export const Loaded = Template.bind({});
Loaded.args = {
    loading: false,
    id: 1,
    // pictureUrl: 'https://placeimg.com/640/480/tech',
    pictureUrl: 'https://static.tvmaze.com/uploads/images/medium_portrait/302/755260.jpg',
    name: 'Example show name',
    rating: 3,
};

export const ImageCheck = Template.bind({});
ImageCheck.args = {
    loading: false,
    id: 1,
    // pictureUrl: 'https://placeimg.com/640/480/tech',
    pictureUrl: checkCard,
    name: 'Example show name',
    rating: 3,
};

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
};
