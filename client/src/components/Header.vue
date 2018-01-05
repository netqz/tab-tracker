<template>
  <v-toolbar dark fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({name: 'Root'})">TabTracker</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn @click="navigateTo({name: 'Songs'})" flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'Login'})" flat dark>
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'Register'})" flat dark>
        Sign Up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" @click="logout" flat dark>
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to homepage
      this.$router.push({
        name: 'Root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #e9e;
}
</style>
