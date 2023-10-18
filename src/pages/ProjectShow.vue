<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        project: {}
      }
    },

    methods: {
      fetchData() {
        axios.get("http://127.0.0.1:8000/api/projects/" + this.$route.params.project)
        .then((response) => {
          this.project = response.data;
          console.log(response.data);
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
    <h1 class="text-center pt-3">Dettagli del progetto</h1>

    <div class="container">
        <div class="row">
            <div class="col-6">
                <img src={{getImageURL()}} alt="" class="w-100">
            </div>

            <div class="col-6">
                <ul class="comicDetails">
                    <li>
                        <span class="list_item_title">Titolo: </span>
                        <span>{{project.title}}</span>
                    </li>
                    <li>
                        <span class="list_item_title">Descrizione: </span>
                        <span>{{project.description}}</span>
                    </li>
                    <li>
                        <span class="list_item_title">Link progetto: </span>
                        <span><a href="#">{{project.githubURL}}</a></span>  
                    </li>
                    <!-- <li>
                        <span class="list_item_title">Tipologia di progetto: </span>
                        <span>{{project.type.name}}</span>  
                    </li> -->
                    <!-- <li>
                        <span class="list_item_title">Tipologie utilizzate: </span>
                        @foreach ($project->tecnologies as $tecnology)
                            <span class="badge" style="background-color: rgb({{$tecnology->color}})">{{$tecnology->name}}</span> 
                        @endforeach 
                    </li> -->
                    <!-- <li>
                        <div class="route_buttons d-flex gap-2 mt-2">
                            <a href="{{route('admin.projects.edit', $project->slug)}}" class="btn btn-outline-dark">Modifica Progetto</a>
                            <form action="{{route('admin.projects.destroy', $project->slug)}}" method="POST">
                                @csrf

                                @method('delete')

                                <input type="submit" value="Cancella Progetto" class="btn btn-outline-dark">
                            </form>
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>