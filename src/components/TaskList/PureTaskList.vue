<template>
  <div>
    <div class="list-items" v-if="loading">loading</div>
    <div class="list-items" v-if="noTasks && !this.loading">empty</div>
    <div class="list-items page lists-show" v-if="showTasks">
      <nav>
        <h1 class="title-page">
          <span class="title-wrapper">
            <a :href="href" target="_blank">{{ title }}</a>
          </span>
        </h1>
      </nav>
      <task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        @archiveTask="$emit('archiveTask', $event)"
        @pinTask="$emit('pinTask', $event)"
      />
    </div>
  </div>
</template>

<script>
import Task from './components/TaskBox.vue';

const delay = time => new Promise(resolve => setTimeout(() => resolve(), time));

export default {
  name: 'pure-task-list',
  props: {
    title: {
      type: String,
      default: 'TaskList',
    },
    href: {
      type: String,
      default: '#',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    tasks: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Task,
  },
  computed: {
    noTasks() {
      return this.tasks.length === 0;
    },
    showTasks() {
      return !this.loading && !this.noTasks;
    },
  },
  methods: {
    async handleArchiveTask($event) {
      await delay(2000);
      this.$emit('archiveTask', $event);
    },
  },
};
</script>
