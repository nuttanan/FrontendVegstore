
<template>
<v-app>

  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="title_tutorial" label="Search by Title"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchTitle">
        Search
      </v-btn>
    </v-col>
    

    <v-col cols="12" sm="12">
      <v-card class="mx-auto spacetable" tile>

        <v-card-title>Tutorials</v-card-title>

        <v-data-table
          :headers="headers"
          :items="tutorials"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteTutorial(item.id)">mdi-delete-sweep</v-icon>
            
          </template>
        </v-data-table>

        <v-card-actions v-if="tutorials.length > 0">
          <v-btn small color="error" @click="removeAllTutorials">
            Remove All
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
     
  </v-row>
  </v-app>
</template>


<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      title_tutorial: "",
      headers: [
        { text: "ID", align: "start", sortable: false, value: "id" },
        { text: "Title", align: "start", sortable: false, value: "title_tutorial" },
        { text: "Description", value: "description_tutorial", sortable: false },
        // { text: "Status", value: "published_tutorial", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response) => {
          this.tutorials = response.data.map(this.getDisplayTutorial);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.title_tutorial)
        .then((response) => {
          this.tutorials = response.data.map(this.getDisplayTutorial);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editTutorial(id) {
      this.$router.push({ name: "tutorial-details", params: { id: id } });
    },

    deleteTutorial(id) {
      TutorialDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayTutorial(tutorial) {
      return {
        id: tutorial.id,
        title_tutorial: tutorial.title_tutorial.length > 30 
        ? tutorial.title_tutorial.substr(0, 30) + "..." : tutorial.title_tutorial,
        description_tutorial: tutorial.description_tutorial.length > 30 
        ? tutorial.description_tutorial.substr(0, 30) + "..." : tutorial.description_tutorial,
        // status: tutorial.published_tutorial ? "Published" : "Pending",
      };
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>

<style>
.list {
  max-width: 900px;
}
.spacetable{
    margin-bottom: 200pt;
}
</style>