import React from 'react';

import BoxContent   from './BoxContent';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'BoxContent',
  component: BoxContent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <BoxContent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  text:"Lorem Ipsum",
  top:true
};
