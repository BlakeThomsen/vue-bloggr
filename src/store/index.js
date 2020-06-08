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
    async deleteBlog({ commit, dispatch }, _id) {
      try {
        let res = await api.delete("blogs/" + _id);
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
  },
});
