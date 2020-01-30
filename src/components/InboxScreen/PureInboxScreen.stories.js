import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTaskList } from '../TaskList/PureTaskList.stories';
import '@storybook/addon-console';
import README from './README.md';

import PureInboxScreen from './PureInboxScreen.vue';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    tasks: defaultTaskList,
  },
  actions: {
    pinTask(context, id) {
      action('pinTask')(id);
    },
    archiveTask(context, id) {
      action('archiveTask')(id);
    },
  },
});

Vue.component('PureInboxScreen', PureInboxScreen);

const paddedList = () => ({
  template: '<div style="padding: 3rem 8rem;"><story/></div>',
});

storiesOf('PureInboxScreen', module)
  .addDecorator(withKnobs)
  .addDecorator(paddedList)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('default', () => ({
    store,
    methods: {
      log() {
        action('PureInboxScreen')();
      },
    },
    render(h) {
      return <pure-inbox-screen/>;
    },
  }))
  .add('error', () => ({
    methods: {
      log() {
        action('PureInboxScreen')();
      },
    },
    render(h) {
      return <pure-inbox-screen error={true}/>;
    },
  }));
