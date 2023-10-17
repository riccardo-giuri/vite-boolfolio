<script>
  import axios from 'axios';
  import Card from './components/Card.vue';

  export default {
    components: {
      Card
    },

    data() {
      return {
        projects: []
      }
    },

    methods: {
      fetchData() {
        axios.get("http://127.0.0.1:8000/api/projects")
        .then((response) => {
          this.projects = response.data;
          console.log(this.projects[0]);
        })
      },

      getImageURL(project) {
        return `http://127.0.0.1:8000/storage/${project.imageURL}`
      }
    },

    mounted() {
      this.fetchData();
    }
  }
</script>

<template>
  <h1 class="text-center pt-3">Lista dei progetti</h1>

  <div class="container mt-4">
      <div class="row">
        <div class="col-4" v-for="project in this.projects" :key="project.id">
          <Card :project="project" :image="getImageURL(project)"></Card>
        </div>
      </div>
  </div>    
</template>

<style scoped>

</style>
