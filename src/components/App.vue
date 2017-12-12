<template>
  <div id="app">
  <img src="https://www.csudh.edu/Assets/uploads/images/home/audience-give.JPG" alt="Avatar" style="width:0.1% height=0.1%"  class="w3-circle w3-margin-top"><br>
       
    <div v-if="this.$store.state.user.displayName">      
      <a href="/admin" @click="admin">Admin Home</a><br>
      <a  href="/logout" @click="logout">Logout</a>
    </div>

    <div  v-else to="/login">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Admin</router-link>
    </div>
    <h1>{{ title }}</h1>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Sign In App'
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
