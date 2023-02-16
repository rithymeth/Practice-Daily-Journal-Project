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
      const response = await this.$axios.get('http://ec2-18-183-190-208.ap-northeast-1.compute.amazonaws.com/entries/')
      commit('setPosts', response.data)
    }
  }
  