import React from 'react';

import DateCircle   from './DateCircle';
import { withKnobs, date  } from '@storybook/addon-knobs';


//👇 This default export determines where your story goes in the story list
export default {
  title: 'DateCircle',
  component: DateCircle,
  argTypes:{
    date:{control:'date'}
  }  
};


// //👇 We create a “template” of how args map to rendering
const Template = (args) =>  {
 const date = new Date(args.date);
return <DateCircle date={date} />
};

export const FirstStory = (args) =>  {
  const date = new Date(args.date);
 return <DateCircle date={date} />
 };

FirstStory.args = {
  date: new Date('December 17, 1995 03:24:00')
};
