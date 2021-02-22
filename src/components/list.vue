<template lang="">
  <!-- {{ posts ? posts.length : "0" }}here -->
  <ConfirmDialog />
  <div class="listContainer" v-for="item in posts" :key="item.id">
    <Avatar :label="item.by.substr(0, 2).toUpperCase()" />
    {{ item.body }}

    <div v-for="like in item.likes" :key="like.by">
      {{ like.by }}
    </div>
    <Divider align="left"
      >{{ moment(item.postedOn).fromNow() }}
      <Button
        @click="HandleDelete(item)"
        v-show="item.by.toLowerCase() === currentUser.toLowerCase()"
        icon="pi pi-trash"
        class="p-button-rounded p-button-text"
      />
      <Button
        @click="HandleLike(item)"
        type="button"
        icon="pi pi-thumbs-up"
        badgeClass="p-badge-danger"
        :badge="item.likes.length"
        class="p-button-rounded p-button-text"
      />

      <Button
        @click="HandleDislike(item)"
        icon="pi pi-thumbs-down"
        class="p-button-rounded p-button-text"
        badgeClass="p-badge-danger"
        :badge="item.dislikes.length"
      />

      <Button
        @click="HandleDelete(item)"
        icon="pi pi-comment"
        class="p-button-rounded p-button-text"
      />
    </Divider>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "list",
  created() {
    console.log(this.$props.posts);
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    currentUser: {
      type: String,
      required: true,
    },
  },
  methods: {
    moment,
    HandleDelete(item) {
      this.$confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          //callback to execute when user confirms the action
          this.$emit("Delete", item.id);
        },
        reject: () => {
          //callback to execute when user rejects the action
        },
      });
    },
    HandleLike(item) {
      this.$emit("Like", item.id);
    },

    HandleDislike(item) {
      this.$emit("DisLike", item.id);
    },
  },
};
</script>
<style>
.listContainer {
  margin-left: 25%;
  margin-right: 25%;
  text-align: left;
}
</style>
