
import React from 'react';
import { render } from 'react-dom';
// cards
//import Demo from './cards/SimpleCard';
//import Demo from './cards/SimpleMediaCard';
//import Demo from './cards/MediaControlCard';
//import Demo from './cards/RecipeReviewCard';
// grid-list
//import Demo from './grid-list/AdvancedGridList';
//import Demo from './grid-list/ImageGridList';
//import Demo from './grid-list/SingleLineGridList';
//import Demo from './grid-list/TitlebarGridList';
import Demo from './grid-list/SimpleCardGL';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Demo />, rootElement);
}
