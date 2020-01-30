<template lang="pug">
  div
    pure-task-list(
      :title="title"
      :href="href"
      :tasks="tasks"
      @archiveTask="archiveTask"
      @pinTask="pinTask"
    )
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PureTaskList from './PureTaskList.vue';

export default {
  name: 'task-list',
  components: {
    PureTaskList,
  },
  props: {
    title: {
      type: String,
      default: 'TaskList',
    },
    href: {
      type: String,
      default: '#',
    },
  },
  methods: {
    ...mapActions(['archiveTask', 'pinTask']),
  },
  computed: {
    ...mapState(['tasks']),
  },
};
</script>
