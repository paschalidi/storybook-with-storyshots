import { configure } from '@storybook/react';

const req = require.context('../stories', true, /.story.jsx$/); // <- import all the stories at once

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);