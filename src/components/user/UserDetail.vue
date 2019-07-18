<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="{ name: 'userEdit', query: { locale: 'en', q: 100} }"
      class="btn btn-primary">
      Edit user
    </router-link>
  </div>
</template>

<script>

</script>
