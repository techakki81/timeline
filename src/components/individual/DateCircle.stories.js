import React from 'react';

import DateCircle   from './DateCircle';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'DateCircle',
  component: DateCircle,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <DateCircle {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  day:"21",
  month:"Dec"
};
