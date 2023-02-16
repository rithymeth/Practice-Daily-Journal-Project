<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    <v-toolbar-title>Daily Journal</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color="white" :to="'/'">Home</v-btn>
    <v-btn color="white" :to="'/newpost'">New Post</v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>
