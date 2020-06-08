<template>
  <div class="blog col-3 m-2">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{blog.title}}</h4>
        <p class="card-text">Author: {{blog.creator.name}}</p>
        <button type="button" class="btn btn-outline-success mr-2">Show More</button>
        <button
          type="button"
          class="btn btn-outline-warning mr-2"
          v-if="$auth.isAuthenticated"
          @click="editBlog"
        >Edit</button>
        <button
          type="button"
          class="btn btn-outline-danger mr-2"
          @click="deleteBlog"
          v-if="$auth.isAuthenticated"
        >Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: ["blog"],
  computed: {
    isCreator() {
      return this.$store.state.profile.email == this.blog.creatorEmail;
    }
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blog._id);
    },
    editBlog() {
      this.$store.dispatch("editBlog", this.blog._id);
    }
  }
};
</script>

<style>
</style>