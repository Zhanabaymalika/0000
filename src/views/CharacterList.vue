<!-- CharacterList.vue -->
<template>
  <div>
    <h1>Characters</h1>
    <ul>
      <li v-for="character in characters" :key="character.id" @click="viewCharacter(character)">
        <img :src="character.image" :alt="character.name" width="100" height="100">
        {{ character.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CharacterList',
  computed: {
    characters() {
      return this.$store.state.characters;
    },
  },
  methods: {
    viewCharacter(character) {
      this.$router.push({ name: 'CharacterDetails', params: { id: character.id } });
    },
  },
};
</script>
