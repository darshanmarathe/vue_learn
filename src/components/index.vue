<template lang="en">
<Toast />
  Logged in As : {{user}}
  <br>
  <User @change="userchanged" />
  <Post @post="postIt" />
  <br />
  <div v-if="this.posts.length > 0">
  <List  :currentUser="user" :posts="posts" @Like="handleLike" @DisLike="handleDisLike" @Delete="handleDelete" />
  </div>
</template>
<script>
import axios from "axios";

import Post from "./post";
import List from "./list";
import User from "./user";
const { uuid } = require("uuidv4");
export default {
  name: "container",
  props: {
    msg: String,
  },
  mounted() {
    const posts = localStorage.getItem("posts");
    const u = sessionStorage.getItem("user");

    if (posts) this.posts = JSON.parse(posts);
    if (u) this.user = u;

    setInterval(() => {
    axios.get('http://localhost:3000/posts').then((e) => {
      this.posts = e.data
    })
    }, 5000);
  },
  components: {
    User,
    Post,
    List,
  },
  methods: {
    postIt(post) {
      if (this.user === "") {
        alert("Select a user first");
        return;
      }
      // this.posts = localStorage.getItem("posts")
      //   ? localStorage.getItem("posts")
      //   : [];

      const newPost ={
        id: uuid(),
        body: post,
        likes: [],
        dislikes: [],
        comments: [],
        postedOn: new Date(),
        by: this.user,
      }
      this.posts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(this.posts));
      axios.post('http://localhost:3000/posts' , newPost)
    },

    handleLike(id) {
      if (this.user === "") {
        alert("Select a user first");
        return;
      }
      const post = this.posts.find((x) => x.id === id);
      let likes = post.likes.filter((x) => x.by == this.user.toLowerCase());
      if (likes.length === 0) {
        post.likes.push({ by: this.user.toLowerCase() });
        this.$toast.add({
          severity: "success",
          summary: "Like Added",
          life: 3000,
        });
        axios.put('http://localhost:3000/posts/' + post.id , post)
        localStorage.setItem("posts", JSON.stringify(this.posts));
      } else {
        post.likes = post.likes.filter((x) => x.by != this.user.toLowerCase());
        this.$toast.add({
          severity: "warning",
          summary: "Like Removed",
          life: 3000,
        });
                axios.put('http://localhost:3000/posts/' + post.id , post);
        localStorage.setItem("posts", JSON.stringify(this.posts));
      }
    },
    handleDisLike(id) {
      const post = this.posts.find((x) => x.id === id);
      post.dislikes.push({});
      this.$toast.add({
        severity: "info",
        summary: "Post not liked",
        life: 3000,
      });
          axios.put('http://localhost:3000/posts/' + post.id , post)
    
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
    handleDelete(id) {
      this.posts = this.posts.filter((x) => x.id !== id);
      localStorage.setItem("posts", JSON.stringify(this.posts));
      this.$toast.add({
        severity: "error",
        summary: "Post Deteted",
        life: 3000,
      });
          axios.delete('http://localhost:3000/posts/' + id )
    
    },
    userchanged(name) {
      if (typeof name != "string") return;
      this.user = name;
      sessionStorage.setItem("user", name);
    },
  },
  data() {
    return {
      posts: [],
      user: "",
    };
  },
};
</script>
<style lang=""></style>
