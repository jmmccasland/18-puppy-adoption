<template lang="html">

<div class="">
  <h2> Add a new PUP!</h2>

  <form>
    <p>
      <label for="name">Name</label>
    </p>
    <p>
      <input v-model="formValues.name" type="text" name="name">
    </p>
    <p>
      <label for="age">Age</label>
    </p>
    <p>
      <input v-model="formValues.age" type="text" name="age">
    </p>
    <p>
      <label for="sex">Sex</label>
    </p>
    <p>
      <select v-model="formValues.sex" name="sex">
    </p>
    <p>
      <label for="color">Color</label>
    </p>
    <p>
      <input v-model="formValues.color" type="text" name="color">
    </p>
    <p>
      <label for="breed">Breed</label>
    </p>
    <p>
      <input v-model="formValues.breed" type="text" name="breed">
    </p>
    <p>
      <label for="image_url">Image Url</label>
    </p>
    <p>
      <input v-model="formValues.image_url" type="text" name="image_url">
    </p>
    <p>
      <label for="description">Description</label>
    </p>
    <p>
      <input v-model="formValues.description" type="text" name="description">
    </p>

    <button type="button">Back</button>
    <button type="submit">Submit</button>
  </form>
  </div>

</template>

<script>
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

  },
};
</script>
