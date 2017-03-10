<template lang="html">
  <div class="app">
    <div class="nav">
      <div class="nav-left">
        <router-link class="nav-item is-brand" v-bind:to="{ name: 'index' }">Puppies</router-link>
      </div>
    <div class="nav-right">
      <router-link class="nav-item" v-bind:to="{ name: 'index' }">All Puppies</router-link>
      <router-link class="nav-item" v-bind:to="{ name: 'index' }">Add Puppy</router-link>
    </div>
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
