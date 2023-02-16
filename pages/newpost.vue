<template>
   <v-container>
    <v-card class="mt-6">
      <v-card-title>
        New Post
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="title" label="Title"></v-text-field>
          <v-textarea v-model="content" label="Content"></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="dark" @click="savePost">Post</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    async savePost() {
      const response = await this.$axios.post(
        "http://ec2-18-183-190-208.ap-northeast-1.compute.amazonaws.com/entries",
        { title: this.title, content: this.content }
      );
      // handle response
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  async fetch() {
    await this.$store.dispatch("fetchPosts");
  },
};
</script>
