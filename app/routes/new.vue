<template lang="html">


<div class="">

  <h2> Add a new PUP!</h2>

  <form v-on:submit.prevent="submit">
    <!-- Name Control -->
    <div class="field">
      <label for="name" class="label">Name</label>
      <p class="control">
        <input v-model="formValues.name" class="input" type="text" name="name">
      </p>
    </div>

    <!-- Age Control -->
    <div class="field">
      <label for="age" class="label">Age</label>
      <p class="control">
        <input v-model="formValues.age" class="input" type="text" name="age">
      </p>
    </div>

    <!-- Sex Control -->
    <div class="field">
      <label for="sex" class="label">Sex</label>
      <p class="control">
        <select v-model="formValues.sex" class="select" name="sex">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </p>
    </div>

    <!-- Color Control -->
    <div class="field">
      <label for="color" class="label">Color</label>
      <p class="control">
        <input v-model="formValues.color" class="input" type="text" name="color">
      </p>
    </div>

    <!-- Breed Control -->
    <div class="field">
      <label for="breed" class="label">Breed</label>
      <p class="control">
        <input v-model="formValues.breed" class="input" type="text" name="breed">
      </p>
    </div>

    <!-- Image Url Control -->
    <div class="field">
      <label for="image_url" class="label">Image Url</label>
      <p class="control">
        <input v-model="formValues.image_url" class="input" type="text" name="image_url">
      </p>
    </div>

    <!-- Description Control -->
    <div class="field">
      <label for="description" class="label">Description</label>
      <p class="control">
        <textarea v-model="formValues.description" class="textarea" name="description"></textarea>
      </p>
    </div>

    <div class="field is-grouped">
      <p class="control">
        <router-link v-bind:to="{ name: 'index' }" tag="button" type="button" class="button">Back</router-link>
      </p>
      <p class="control">
        <button type="submit" class="button is-primary">Submit</button>
      </p>
    </div>
  </form>


</div>

</template>

<script>
import store from '../store';
import { create } from '../actions/puppy';

export default {
  name: 'New',

  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        image_url: '',
        description: '',
      }
    };
  },

  methods: {
    submit() {
      store.dispatch(create(this.formValues)).then(() => {
        this.$router.push({ name: 'index' });
      });
    },
  },
};
</script>
