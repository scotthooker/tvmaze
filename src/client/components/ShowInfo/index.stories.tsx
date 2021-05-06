import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ShowInfo, ShowInfoProps } from '.';

export default {
    title: 'Component/Show Info',
    component: ShowInfo,
} as Meta;

const Template: Story<ShowInfoProps> = (args) => <ShowInfo {...args} />;

export const Loaded = Template.bind({});
Loaded.args = {
    loading: false,
    streamedOn: 'BBC Three',
    schedule: 'Tuesdays',
    status: 'Running',
    genres: ['Drama', 'Comedy', 'Music'],
};

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
};
