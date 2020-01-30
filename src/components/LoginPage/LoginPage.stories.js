import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';
import README from './README.md';

import LoginPage from '.';

Vue.component('LoginPage', LoginPage);

storiesOf('LoginPage', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('LoginPage', () => ({
    methods: {
      log() {
        action('LoginPage')();
      },
    },
    render(h) {
      return <LoginPage></LoginPage>;
    },
  }));
