<template>
  <div class="home">
    <div class="container-fluid text-center">
      <div class="row d-flex align-center bg-dark">
        <div class="col">
          <h1 class="text-light" v-if="$auth.isAuthenticated">Create New Blog</h1>
          <form class="form-inline" v-if="$auth.isAuthenticated" @submit.prevent="newBlog">
            <div class="form-group">
              <input type="text" class="form-control m-2" placeholder="Title" v-model="blog.title" />
              <input type="text" class="form-control m-2" placeholder="Body" v-model="blog.body" />
            </div>
            <button type="submit" class="btn btn-outline-success">Submit</button>
          </form>
          <div class="row">
            <blog v-for="blog in blogs" :key="blog.id" :blog="blog" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "@/components/BlogsComp.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  data() {
    return {
      blog: {
        title: "",
        body: "",
        imgUrl: ""
      }
    };
  },
  components: {
    Blog
  },
  methods: {
    newBlog() {
      this.$store.dispatch("newBlog", this.blog);
    }
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  }
};
</script>
