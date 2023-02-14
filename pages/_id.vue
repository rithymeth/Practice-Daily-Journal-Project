<template>
  <v-container>
    <v-card class="mt-6">
      <v-card-title>
        {{ post.title }}
      </v-card-title>
      <v-card-text>
        {{ post.content }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import CircularJSON from 'circular-json'

export default {
  async fetch() {
    const response = await this.$axios.get(`http://ec2-52-63-159-171.ap-southeast-2.compute.amazonaws.com/todos${this.$route.params.id}`)
    this.post = CircularJSON.parse(CircularJSON.stringify(response.data))
  },
  data() {
    return {
      post: {}
    }
  }
}
</script>
