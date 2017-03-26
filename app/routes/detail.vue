<template lang="html">
  <div class="">
    <div v-if="currentPuppy" class="level has-text-centered">
      <span><h2 class=" level-item title">{{ currentPuppy.name }}</h2></span>
       <span><button class="button is-success"><span class="fa fa-paw fa-pull-left"></span> I'm Adopted!</button></span>
    </div>

    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="card is-full-width">
          <div class="card-image">
            <figure class="image">
              <img v-bind:src="currentPuppy.image_url" alt="" class="image">
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div class="level has-text-centered">
      <div class="level-item">
        <div>
          <p class="heading">Age</p>
          <p class="title">{{currentPuppy.age}}</p>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Breed</p>
          <p class="title">{{currentPuppy.breed}}</p>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Color</p>
          <p class="title">{{currentPuppy.color}}</p>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Sex</p>
          <p class="title">{{currentPuppy.sex}}</p>
        </div>
      </div>
    </div>

    <div class="is-fullwidth">
     <div class="">
       <h3 class="subtitle">About Me</h3>
       <p>{{currentPuppy.description}}</p>
     </div>
   </div>
 </div>



  </div>
</template>

<script>
import store from '../store';
import { findOne } from '../actions/puppy';
import { toggleAdopted } from '../actions/puppy';

export default {
  name: 'Detail',

  data() {
    return {
      puppies: this.$select('puppies'),
      currentPuppy: null,
    };
  },
  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },

  watch: {
    puppies: 'getPuppy',
    '$route.params.id': 'getPuppy',
  },

  methods: {
    getPuppy() {
      this.currentPuppy = this.puppies.find(puppy => puppy.id === this.$route.params.id);
    },

    adopt() {
      store.dispatch(toggleAdopted(this.currentPuppy));
    }
  },
};
</script>
