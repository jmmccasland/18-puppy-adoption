<template lang="html">
<!-- Center Column -->
  <div class="column">
    <div class="level">
      <div class="level-left">
        <h1 class="title level-item">Puppies For Adoption</h2>
      </div>
      <div class="level-right">
        <router-link v-bind:to="{ name: 'new' }" tag="button" class="button is-info level-item">Add a Pupper</router-link>
      </div>
    </div>

    <table class="table">
      <thead>
        <th>Name</th>
        <th>Age</th>
      </thead>
    </table>

    <div class="level">
      <div class="level-left">
        <h1 class="title level-item">Adopted Puppers</h2>
      </div>
    </div>

    <table class="table is-striped">
      <thead>
        <th>Name</th>
        <th>Age</th>
        <th></th>
      </thead>

      <tr>
        <td>Pupper Name</td>
        <td>13</td>
        <td>
          <!-- Update path to name: detail with params after you put in for loop -->
          <router-link v-bind:to="{ path: '/posts/:id' }">read more</router-link>
        </td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  name: 'index',

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
