import React from 'react';

import Box  from './Box.stories';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Box',
  component: Box,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Box {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  children:`test hello`
};
