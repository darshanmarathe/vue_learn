<template>
  <div>
    User :
    <input
      @change="userChanged"
      type="text"
      placeholder="enter username"
      v-model="user"
    />

    {{ user }}
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    userChanged() {
      this.$emit("change", this.user);
    },
  },
};
</script>
<style lang=""></style>
