import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    comments: [],
    activeBlog: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, data) {
      state.blogs = data;
    },
    addBlog(state, data) {
      state.blogs.push(data);
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog;
    },
    setComments(state, comments) {
      state.comments = comments;
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async newBlog({ commit, dispatch }, blog) {
      try {
        let res = await api.post("blogs", blog);
        dispatch("getAllBlogs");
        console.log("successful post");
      } catch (error) {
        console.error(error);
      }
    },
    async editBlog({ commit, dispatch }) {},
    async deleteBlog({ commit, dispatch }, id) {
      try {
        let res = await api.delete("blogs/" + id);
        dispatch("getAllBlogs");
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogs({ commit, dispatch }) {
      try {
        let res = await api.get("blogs");
        commit("setBlogs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogById({ commit, dispatch }, id) {
      try {
        let res = await api.get("blogs/" + id);
        commit("setActiveBlog", res.data);
        commit("setComments", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    // FIXME get blog by id
    // this will return a blog and its comments, commit both to the state individually
    //setActiveBlog
    //setActiveComments

    // FIXME add comment, delete comment
  },
});
