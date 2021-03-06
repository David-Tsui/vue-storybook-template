import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';
import README from './README.md';

import CalendarStory from './index';

Vue.component('CalendarStory', CalendarStory);

storiesOf('CalendarStory', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('show', () => ({
    methods: {
      log() {
        action('CalendarStory')();
      },
    },
    render(h) {
      return <CalendarStory></CalendarStory>;
    },
  }));
