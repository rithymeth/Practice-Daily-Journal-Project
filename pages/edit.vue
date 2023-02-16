<template>
    <v-container>
      <v-card class="mt-6">
        <v-card-title>Edit Post</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitForm">
            <v-text-field v-model="post.title" label="Title"></v-text-field>
            <v-textarea v-model="post.content" label="Content"></v-textarea>
            <v-btn style="background-color: #2196f3; color: white;" type="submit" >Save</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: ''
      }
    },
    async fetch() {
      const { data } = await this.$axios.get(`http://ec2-18-183-190-208.ap-northeast-1.compute.amazonaws.com/entries/${this.$route.params.id}`)
      this.post = data
    },
    methods: {
      async submitForm() {
        await this.$axios.put(`http://ec2-18-183-190-208.ap-northeast-1.compute.amazonaws.com/entries/${this.post.id}`, this.post)
        this.$router.push({ name: 'id', params: { id: this.post.id } })
      }
    }
  }
  </script>
  