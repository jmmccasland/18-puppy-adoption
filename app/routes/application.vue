<template lang="html">
  <div class="app">
    <div class="section section--header">
      <h1 class="is-brand logo"><router-link v-bind:to="{ name: 'index' }"> Puppies</router-link></h1>
      <ul class="nav-list">
        <li class="nav-list__item"><router-link>All Puppies</router-link></li>
        <li class="nav-list__item"><router-link>Add Puppy</router-link></li>

      </ul>
    </div>







  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
