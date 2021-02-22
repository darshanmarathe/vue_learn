<template>
  <container msg="Welcome to Social Wall" />
</template>

<script>
import container from "./components/index";

export default {
  name: "App",
  components: {
    container,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
