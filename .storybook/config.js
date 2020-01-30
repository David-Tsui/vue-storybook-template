import { addDecorator, addParameters, configure } from '@storybook/vue';
import { addReadme } from 'storybook-readme/vue';
import '../src/index.css';

addDecorator(addReadme);
addParameters({
  readme: {
    codeTheme: 'github',
  }
});


// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
// configure(require.context('../stories', true, /\.stories\.js$/), module);
