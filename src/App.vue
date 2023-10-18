<script>
  export default {
    data() {
      return {
        projects: []
      }
    }
  }
</script>

<template>
  <nav class="nav-bg">
    <div class="container">
      <div class="py-3 d-flex align-items-center">
        <h2>PORTFOLIO</h2>

        <ul class="ms-auto d-flex list-unstyled gap-4">
          <li><RouterLink :to="{name: 'home'}" class="text-dark text-decoration-none">Home</RouterLink></li>
          <li><RouterLink :to="{name: 'index'}" class="text-dark text-decoration-none">Lista Progetti</RouterLink></li>
          <li><a href="http://127.0.0.1:8000/login" class="text-dark text-decoration-none">Accedi</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
  .nav-bg{
    background-color: rgb(136, 130, 130);
  }
</style>
