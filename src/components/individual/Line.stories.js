import React from 'react';

import Line   from './Line';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Line',
  component: Line,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Line {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  
};
