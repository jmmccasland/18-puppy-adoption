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
        <th></th>
      </thead>

      <tr v-if="!puppy.adopted" v-for="puppy in puppies">
        <td>{{puppy.name}}</td>
        <td>{{puppy.age}}</td>
        <td>
          <!-- Update path to name: detail with params after you put in for loop -->
          <router-link v-bind:to="{ name: 'detail', params: { id: puppy.id } }">read more</router-link>
        </td>
      </tr>
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

      <tr v-if="puppy.adopted" v-for="puppy in puppies">
        <td>{{puppy.name}}</td>
        <td>{{puppy.age}}</td>
        <td>
          <!-- Update path to name: detail with params after you put in for loop -->
          <router-link v-bind:to="{ name: 'detail', params: { id: puppy.id } }">read more</router-link>
        </td>
      </tr>

    </table>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/puppy';

export default {
  name: 'index',

  data() {
    return {
      puppies: this.$select('puppies'),
    };
  },

  mounted() {
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
