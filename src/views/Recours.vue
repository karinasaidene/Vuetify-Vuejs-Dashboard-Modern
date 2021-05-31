<template>
  <div class="projects">
    <h1 class="subheading grey--text">Liste de recours</h1>
    <v-container>
      <v-layout row wrap class="mb-4">
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn small outlined color="green" router to=/Acceuil class="mr-2" dark v-on="on">
           <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">ajouter recours</span>
        </v-btn>
      </template>
        <span>saisir un recours</span>
      </v-tooltip>
      </v-layout>
      <v-card flat  v-for="project in projects" :key="project.email" class="mb-1">
          <v-layout row wrap :class="`pa-3 project ${project.type_profil}`">
            <v-flex xs12 md6>
                <div class="caption grey--text">Nom</div>
                <div >{{project.nom}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
                <div class="caption grey--text">prenom</div>
                <div >{{project.prenom}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
                <div class="caption grey--text">motif de recours</div>
                <div >{{project.type}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
                <div class="caption grey--text">date</div>
                <div >{{project.date}}</div>
            </v-flex>
          </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'projects',
  components: {
   
  },
  data: () => ({
    projects : [
      {nom: 'reda', prenom :'reda', type: 'motif de recours', date:'25/04/2001'},
        {nom: 'reda', prenom :'reda', type: 'motif de recours', date:'25/04/2001'},
          {nom: 'reda', prenom :'reda', type: 'motif de recours', date:'25/04/2001'},
            {nom: 'reda', prenom :'reda', type: 'motif de recours', date:'25/04/2001'},
              {nom: 'reda', prenom :'reda', type: 'motif de recours', date:'25/04/2001'}
      
    ]
  }),
 
  }
</script>
<style >
  .project {
      border-left: 4px solid orange;
  }
  
   .v-chip.valideur {
      color: #3cd1c2;
  }
  .p.ovnored {
      color: red;
  }
  

</style>