<template>
  <v-container>
    <v-card class="mt-6">
      <v-card-title> New Post </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submitForm">
          <v-text-field v-model="title" label="Title"></v-text-field>
          <v-textarea v-model="content" label="Content"></v-textarea>
          <v-btn style="background-color: #2196f3; color: white" type="submit"
            >Post</v-btn
          >
        </v-form>
      </v-card-text>
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
    async submitForm() {
      const response = await this.$axios.post(
        "http://ec2-18-183-190-208.ap-northeast-1.compute.amazonaws.com/entries",
        { title: this.title, content: this.content }
      )
      this.$router.push('/')
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
