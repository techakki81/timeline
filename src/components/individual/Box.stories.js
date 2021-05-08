import React from 'react';

import Box  from './Box';
import Line from './Line'
//👇 This default export determines where your story goes in the story list
export default {
  title: 'Box',
  component: Box,
  subcomponents:{ Line },
}; 

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Box {...args}><Line/></Box>;

export const FirstStory = Template.bind({});

//  FirstStory.children= {
//    <p>hi</p>]
//  };
