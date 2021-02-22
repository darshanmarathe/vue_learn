<template lang="en">
<Toast />
<Textarea placeholder="whats cooking in your mind?" maxlength="300" v-model="post" :autoResize="true" rows="5" cols="60" />
<br> 
    <span style="vertical-align: middle">
        {{post.length}}/300 - {{300 - post.length}} charectors remaining
        </span>
<Button  @click="submit" :disabled="post.trim() === ''"  class="p-button-rounded" label="Submit" />
<br>
<br>
</template>
<script>
export default {
  name: "Post",
  data() {
    return {
      post: "",
    };
  },
  methods: {
    submit() {
      console.log(this.post);
      this.$emit("post", this.post);
      this.$toast.add({
        severity: "success",
        summary: "Message Posted",
        detail: this.post,
        life: 3000,
      });
      this.post = "";
    },
  },
};
</script>
<style>
.btncontainer {
  text-align: center;
}
</style>
