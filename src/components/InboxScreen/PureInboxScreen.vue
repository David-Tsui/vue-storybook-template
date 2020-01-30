<template>
  <div>
    <div class="page lists-show" v-if="error">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>
    <task-list
      title="TaskList (Inbox Screen)"
      href="https://www.learnstorybook.com/intro-to-storybook/vue/en/screen/"
    />
  </div>
</template>

<script>
import TaskList from '@c/TaskList/TaskList.vue';

export default {
  name: 'PureInboxScreen',
  components: {
    TaskList,
  },
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.pure-inbox-screen {
  // display: none
}
</style>
