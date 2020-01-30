<template>
  <div>
    <pure-inbox-screen :error="error" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PureInboxScreen from './PureInboxScreen.vue';

export default {
  name: 'InboxScreen',
  components: {
    PureInboxScreen,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(['error']),
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.inbox-screen {
  // display: none
}
</style>
