import Vue from 'vue';
import TaskList from '@/components/TaskList/PureTaskList.vue';
import {
  withPinnedTasks,
  withArchivedTasks,
  withOnlyArchivedTasks,
} from '@/components/TaskList/PureTaskList.stories';

it('renders pinned tasks at the start of the list', () => {
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    propsData: { tasks: withPinnedTasks },
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    '.list-item:first-child.TASK_PINNED',
  );

  // We expect the pinned task to be rendered first, not at the end
  expect(!Object.is(firstTaskPinned, null));
});

it('renders archived tasks at the end of the list', () => {
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    propsData: { tasks: withArchivedTasks },
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    '.list-item:last-child.TASK_ARCHIVED',
  );

  // We expect the pinned task to be rendered first, not at the end
  expect(firstTaskPinned).not.toBe(null);
});

it('renders list of all archived', () => {
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    propsData: { tasks: withOnlyArchivedTasks },
  }).$mount();
  const archivedItems = vm.$el.querySelectorAll('.list-item.TASK_ARCHIVED');

  // We expect the pinned task to be rendered first, not at the end
  expect([...archivedItems].length).toBe(withOnlyArchivedTasks.length);
});
