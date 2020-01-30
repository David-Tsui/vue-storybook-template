<template>
  <div id="app">
    <div class="task-list-data">
      <task-list
        title="TaskList (Data)"
        href="https://www.learnstorybook.com/intro-to-storybook/vue/en/data/"
      />
    </div>
    <!-- <calendar-story /> -->
    <div class="task-list-inbox-screen">
      <inbox-screen />
    </div>
  </div>
</template>

<script>
import store from './store';
import TaskList from './components/TaskList/TaskList.vue';
// import CalendarStory from './components/CalendarStory';
import InboxScreen from './components/InboxScreen';

export default {
  name: 'app',
  store,
  components: {
    TaskList,
    // CalendarStory,
    InboxScreen,
  },
};
</script>

<style>
@import './index.css';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
