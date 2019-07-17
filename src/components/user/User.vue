<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-primary" @click="navigateToHome">Go to home</button>
    <p>
      Loaded id:  {{ id }}
    </p>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      navigateToHome() {
        this.$router.push({path: '/'});
      }
    }
  }
</script>
