import React from 'react';

import Box   from './Box';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Box',
  component: Box,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Box {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  date:"21 OCT",
  text:"Lorem Ipsum",
  top:true
};
