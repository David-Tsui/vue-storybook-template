<template>
  <div class="light"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.light {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  transition: background 0.3s;
}
.light.red {
  background: red;
}
.light.yellow {
  background: yellow;
}
.light.green {
  background: green;
}
</style>
