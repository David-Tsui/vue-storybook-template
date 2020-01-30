import { storiesOf } from '@storybook/vue';
import { task, methods } from './2-TaskBox.stories';

import TaskList from '../src/components/PureTaskList.vue';


export const defaultTaskList = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' },
];

export const withPinnedTasks = [
  { id: '1', title: 'Task 1', state: 'TASK_PINNED' },
  ...defaultTaskList.slice(1, 6),
];

export const withArchivedTasks = [
  ...defaultTaskList,
  { id: '7', title: 'Task 7', state: 'TASK_ARCHIVED' },
];

export const withOnlyArchivedTasks = (() => {
  const types = ['PINNED', 'ARCHIVED'];
  return defaultTaskList.map((_task) => {
    const randomIndex = 1;
    return {
      ..._task,
      state: `TASK_${types[randomIndex]}`,
    };
  });
})();

const paddedList = () => ({
  template: '<div style="padding: 3rem 8rem;"><story/></div>',
});

storiesOf('TaskList', module)
  .addDecorator(paddedList)
  .add('default', () => ({
    components: { TaskList },
    render(h) {
      return (
        <task-list
          tasks={this.tasks}
          onArchiveTask={this.onArchiveTask}
          onPinTask={this.onPinTask}
        />
      );
    },
    data: () => ({
      tasks: defaultTaskList,
    }),
    methods,
  }))
  .add('withPinnedTasks', () => ({
    components: { TaskList },
    render(h) {
      return (
        <task-list
          tasks={this.tasks}
          onArchiveTask={this.onArchiveTask}
          onPinTask={this.onPinTask}
        />
      );
    },
    data: () => ({
      tasks: withPinnedTasks,
    }),
    methods,
  }))
  .add('withArchivedTasks', () => ({
    components: { TaskList },
    render(h) {
      return (
        <task-list
          tasks={this.tasks}
          onArchiveTask={this.onArchiveTask}
          onPinTask={this.onPinTask}
        />
      );
    },
    data: () => ({
      tasks: withArchivedTasks,
    }),
    methods,
  }))
  .add('withOnlyArchivedTasks', () => ({
    components: { TaskList },
    render(h) {
      return (
        <task-list
          tasks={this.tasks}
          onArchiveTask={this.onArchiveTask}
          onPinTask={this.onPinTask}
        />
      );
    },
    data: () => ({
      tasks: withOnlyArchivedTasks,
    }),
    methods,
  }))
  .add('loading', () => ({
    components: { TaskList },
    template: '<task-list loading @archiveTask="onArchiveTask" @pinTask="onPinTask"/>',
    methods,
  }))
  .add('empty', () => ({
    components: { TaskList },
    template: '<task-list  @archiveTask="onArchiveTask" @pinTask="onPinTask"/>',
    methods,
  }));