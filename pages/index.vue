<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="12" md="4">
        <v-card class="mt-6">
          <v-card-title>
            {{ post.title }}
          </v-card-title>
          <v-card-text>
            {{ limitText(post.content, 100) }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="dark" :to="'/' + post.id">Read</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
    limitText(text, limit) {
      const words = text.split(' ')
      if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...'
      } else {
        return text
      }
    }
  },
  async fetch() {
    await this.$store.dispatch('fetchPosts')
  }
}
</script>
