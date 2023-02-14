export const state = () => ({
    posts: []
  })
  export const mutations = {
    setPosts(state, posts) {
      state.posts = posts
    }
  }
  export const actions = {
    async fetchPosts({ commit }) {
      const response = await this.$axios.get('http://ec2-52-63-159-171.ap-southeast-2.compute.amazonaws.com/todos')
      commit('setPosts', response.data)
    }
  }
  