<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="12" md="4">
        <v-card class="mt-6">
          <v-card-title>
            {{ post.title }}
          </v-card-title>
          <v-card-text>
            {{ truncate(post.content, 100) }}
          </v-card-text>
          <v-card-actions>
            <v-btn style="background-color: #2196f3; color: white;" :to="{ name: 'id', params: { id: post.id } }"
              >Read</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn
            style="background-color: #FFC107; color: white;"
              :to="{ name: 'edit', params: { id: post.id } }"
              >Edit</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn style="background-color: #FF5252; color: white;" @click="deletePost(post.id)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    const { data } = await this.$axios.get(
      "http://ec2-18-183-190-208.ap-northeast-1.compute.amazonaws.com/entries"
    );
    this.posts = data;
  },
  methods: {
    async deletePost(id) {
      if (confirm("Are you sure you want to delete this post?")) {
        await this.$axios.delete(
          `http://ec2-18-183-190-208.ap-northeast-1.compute.amazonaws.com/entries/${id}`
        );
        this.posts = this.posts.filter((post) => post.id !== id);
      }
    },
    truncate(text, length) {
      if (text && text.length > length) {
        return text.substring(0, length) + "...";
      }
      return text;
    },
  },
};
</script>
