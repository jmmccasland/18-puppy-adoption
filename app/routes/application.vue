<template lang="html">
  <div class="app">
    <div class="nav">
      <div class="nav-left">
        <router-link class="nav-item is-brand" v-bind:to="{ name: 'index' }">Puppies</router-link>
      </div>
    <div class="nav-right">
      <router-link class="nav-item" v-bind:to="{ name: 'index' }">All Puppies</router-link>
      <router-link class="nav-item" v-bind:to="{ name: 'new' }">Add Puppy</router-link>
    </div>
  </div><!-- /.nav -->

<!-- Main Section of Page -->
  <div class="section">
    <div class="container">
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

            <div class="panel-block">
              <div class="media-left">
              <img src="http://www.placecera.com/200/200" alt="">
              </div>

              <div class="right">
                <h4>Pupper Name</h4>
                <router-link v-bind:to="{ name: 'detail' }">read more</router-link>
              </div>
            </div><!-- /.panel-block -->
            <div class="panel-block">
              <div class="media-left">
              <img src="http://www.placecera.com/200/200" alt="">
              </div>

              <div class="right">
                <h4>Pupper Name</h4>
                <router-link v-bind:to="{ name: 'detail' }">read more</router-link>
              </div>
            </div><!-- /.panel-block -->

            <div class="panel-block">
              <div class="media-left">
              <img src="http://www.placecera.com/200/200" alt="">
              </div>

              <div class="right">
                <h4>Pupper Name</h4>
                <router-link v-bind:to="{ name: 'detail' }">read more</router-link>
              </div>
            </div><!-- /.panel-block -->

            <div class="panel-block">
              <div class="media-left">
              <img src="http://www.placecera.com/200/200" alt="">
              </div>

              <div class="right">
                <h4>Pupper Name</h4>
                <router-link v-bind:to="{ name: 'detail' }">read more</router-link>
              </div>
            </div><!-- /.panel-block -->

          </div>
        </div>

        <!-- Center Column -->
        <div class="column">
          <div class="level">
            <div class="level-left">
              <h1 class="title level-item">Puppies For Adoption</h2>
            </div>
            <div class="level-right">
              <button class="button is-info level-item">Add a Pupper</button>
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

          <table class="table">
            <thead>
              <th>Name</th>
              <th>Age</th>
            </thead>
          </table>

        </div>


      </div>
    </div>
  </div>

</div><!-- /.app -->
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {

  },
};
</script>
