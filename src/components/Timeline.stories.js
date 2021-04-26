import React from 'react';

import Timeline   from './Timeline';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Timeline',
  component: Timeline,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Timeline {...args} />;

export const FirstStory = Template.bind({});
const card ={ 
    date:Date.now(),
    text:"Lorem Ipsum doloth"
}

FirstStory.args = {
  cards:[card]
};
