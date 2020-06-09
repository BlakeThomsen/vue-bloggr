<template>
  <div class="blog container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{blog.blog.title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{blog.blog.creatorEmail}}</h6>
            <p class="card-text">{{blog.blog.body}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <comment v-for="comment in comments" :key="comment.blogId" />
      {{comment.body}}
    </div>
  </div>
</template>

<script>
import Comment from "@/components/CommentsComp.vue";
export default {
  name: "BlogDetails",
  mounted() {
    this.$store.dispatch("getBlogById", this.$route.params.id);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
    comment() {
      return this.$store.state.comments;
    }
  },
  components: { Comment }
};
</script>

<style>
</style>
