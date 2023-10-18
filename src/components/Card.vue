<script>
    export default {
        props: {
            project: Object,
            image: String
        }
    }
</script>

<template>

    <div class="card">
        <img :src="image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nome Progetto: {{project.title}}</h5>
            <RouterLink :to="{name:'projects', params: {project: project.slug}}" class="btn btn-outline-dark">Dettagli progetto</RouterLink>
        </div>
    </div>
</template>

<style>

</style>