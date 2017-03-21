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
            <div class="panel-block">

              <div class="media-left">
              <img src="http://www.placecera.com/200/200" alt="" class="image is-128x128">
              </div>

              <div class="right">
                <h4>Pupper Name</h4>
                <router-link v-bind:to="{ name: 'detail' }">read more</router-link>
              </div>
            </div><!-- /.panel-block -->

          </div><!-- /.panel -->
        </div><!-- /.column -->

        <!-- Router Views Render Here!!! Woo Woo! -->
        <router-view></router-view>

      </div><!-- /.columns -->
    </div><!-- /.container -->
  </div><!-- /.section -->

</div><!-- /.app -->
</template>

<script>
export default {
  name: 'Application',

  data() {
    return {};
  },

  methods: {

  },
};
</script>
