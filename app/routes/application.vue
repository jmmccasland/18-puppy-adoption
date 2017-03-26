<template lang="html">
  <div class="app">

    <!-- Nav Bar -->
    <div class="nav">
      <div class="nav-left">
        <router-link class="nav-item is-brand" v-bind:to="{ name: 'index' }">Puppies</router-link>
      </div>
    <div class="nav-right">
      <router-link class="nav-item" v-bind:to="{ name: 'index' }">All Puppies</router-link>
      <router-link class="nav-item" v-bind:to="{ name: 'new' }">Add Puppy</router-link>
    </div>
  </div><!-- /.nav -->

  <!-- Main Container -->
  <div class="section">
    <div class="container">

      <!-- Main Columns -->
      <div class="columns">

        <!-- Left Column/Adopt a Pupper -->
        <div class="column is-one-third">
          <div class="panel">
            <h3 class="panel-heading">Adopt a Pupper</h3>

            <div v-for="puppy in puppies" class="panel-block">
              <article class="media">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img v-bind:src="puppy.image_url" alt="">
                  </p>
                </figure>

                <div class="media-content">
                  <div class="content">
                    <div>{{puppy.name}}</div>
                    <router-link v-bind:to="{ name: 'detail', params: { id: puppy.id } }">read more</router-link>
                  </div>
                </div>
              </article>
            </div><!-- /.panel-block -->

          </div><!-- /.panel -->
        </div><!-- /.column -->

        <div class="column">
          <!-- Router Views Render Here!!! Woo Woo! -->
          <router-view></router-view>
        </div><!-- /.column -->

      </div><!-- /.columns -->
    </div><!-- /.container -->
  </div><!-- /.section -->

</div><!-- /.app -->
</template>

<script>
import store from '../store';
import { findAll } from '../actions/puppy';

export default {
  name: 'Application',

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
