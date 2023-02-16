<template>
  <v-container>
    <v-card class="mt-6">
      <v-card-title>
        {{ post.title }}
      </v-card-title>
      <v-card-text>
        {{ post.content }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="dark" :to="'/'">Back</v-btn>
      </v-card-actions>
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
  }
}
</script>