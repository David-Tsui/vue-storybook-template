import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import Task from '../src/components/TaskList/components/TaskBox.vue';
import TaskReadme from '../src/components/README.md';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const methods = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme before story
      // content: TaskReadme,
      // Show readme at the addons panel
      sidebar: TaskReadme,
    },
  })
  .add('default', () => ({
    components: { Task },
    template: '<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>',
    data: () => ({ task }),
    methods,
  }))
  .add('pinned', () => ({
    components: { Task },
    template: '<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>',
    data: () => ({ task: { ...task, state: 'TASK_PINNED' } }),
    methods,
  }))
  .add('archived', () => ({
    components: { Task },
    template: '<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>',
    data: () => ({ task: { ...task, state: 'TASK_ARCHIVED' } }),
    methods,
  }));
