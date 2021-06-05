<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn small outlined color="blue" @click="sortBy()" class="mr-2" dark v-on="on">
           <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">trier par total points</span>
        </v-btn>
      </template>
        <span>trier demandeurs selon le nombre de points</span>
      </v-tooltip>
    <v-container>
      <v-layout row wrap>
          
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="red lighten-2">
                <img :src="person.avatar" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">nom et prenom : {{ person.name }}</div>
              <div class="grey--text">nombre de points total : {{ person.points }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    team: [
      { name: "Iyad", points: "100", avatar: "/img1.png" },
      { name: "Reda", points: "30", avatar: "/img2.png" },
      { name: "Zineb", points: "12", avatar: "/img3.png" },
      { name: "karin", points: "50", avatar: "/img4.png" },
      { name: "Reda", points: "30", avatar: "/img2.png" },
      { name: "Zineb", points: "12", avatar: "/img3.png" },
      { name: "karin", points: "50", avatar: "/img4.png" },
      { name: "Reda", points: "30", avatar: "/img2.png" },
      { name: "Zineb", points: "12", avatar: "/img3.png" },
      { name: "karin", points: "50", avatar: "/img4.png" },
       { name: "Zineb", points: "12", avatar: "/img3.png" },
      { name: "karin", points: "50", avatar: "/img4.png" },
      { name: "Reda", points: "30", avatar: "/img2.png" },
      { name: "Zineb", points: "12", avatar: "/img3.png" },
      { name: "karin", points: "50", avatar: "/img4.png" },
      { name: "Reda", points: "30", avatar: "/img2.png" },
      { name: "Zineb", points: "12", avatar: "/img3.png" },
      { name: "karin", points: "50", avatar: "/img4.png" },
    ],
  }),
   methods: {
    sortBy() {
    this.team.sort((a, b) => {return b.points-a.points});
    },
  },
};
</script>

<style>
</style>