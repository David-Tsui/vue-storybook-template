import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import initStoryshots from '@storybook/addon-storyshots';

// jest.setTimeout(10000);
registerRequireContextHook();
initStoryshots();
