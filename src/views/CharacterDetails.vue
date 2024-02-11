<!-- CharacterDetails.vue -->
<template>
  <div>
    <h1>{{ character.name }}</h1>
    <img :src="character.image" :alt="character.name">
    <p>{{ character.description }}</p>
    <router-link to="/">Back to Characters</router-link>
  </div>
</template>

<script>
export default {
  name: 'CharacterDetails',
  props: ['id'],
  computed: {
    character() {
      return this.$store.state.characters.find(char => char.id === parseInt(this.id));
    },
  },
  created() {
    if (!this.character) {
      this.$router.push('/');
    }
  },
};
</script>
