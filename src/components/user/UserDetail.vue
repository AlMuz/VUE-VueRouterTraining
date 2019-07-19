<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="link"
      class="btn btn-primary">
      Edit user
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter');
      next();
    }
  }
</script>
