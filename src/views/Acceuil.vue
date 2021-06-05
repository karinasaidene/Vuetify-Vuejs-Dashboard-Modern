<!--<template>
  <div class="team">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container >
      <v-layout row wrap>
         <v-flex
        sm6
        xs12
        md6
        lg3
      >
       <v-card class="ma-3">
    <v-list-item  >
       <v-list-item-avatar
        tile
        class="mt-n7"
      >
      <v-sheet color="green" width="80" height="80" elevation="10">
            <v-icon dark large>store</v-icon>
      </v-sheet>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="overline text-right">Article</div>
        <v-list-item-title class="headline mb-1 text-right" >523614</v-list-item-title>
        <div><v-divider></v-divider></div>
      </v-list-item-content> 
    </v-list-item>
    <v-card-actions>
      <v-icon text class="ma-2">person</v-icon>
      <div class="overline">Iyad</div>
    </v-card-actions>
  </v-card>
      </v-flex>
       <v-flex
        sm6
        xs12
        md6
        lg3
      >
       <v-card class="ma-3">
    <v-list-item>
       <v-list-item-avatar
        tile
        class="mt-n7"
      >
      <v-sheet color="#F44336" width="80" height="80" elevation="10">
            <v-icon dark large>subscriptions</v-icon>
      </v-sheet>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="overline text-right">Abonné</div>
        <v-list-item-title class="headline mb-1 text-right" >+700</v-list-item-title>
        <div><v-divider></v-divider></div>
      </v-list-item-content> 
    </v-list-item>
    <v-card-actions>
      <v-icon text class="ma-2">subscriptions</v-icon>
      <div class="overline">AAE IdeaPro</div>
    </v-card-actions>
  </v-card>
      </v-flex>
       <v-flex
        sm6
        xs12
        md6
        lg3
      >
       <v-card class="ma-3">
    <v-list-item>
       <v-list-item-avatar
        tile
        class="mt-n7"
      >
      <v-sheet color="#03A9F4" width="80" height="80" elevation="10">
            <v-icon dark large>add_shopping_cart</v-icon>
      </v-sheet>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="overline text-right">Shopping</div>
        <v-list-item-title class="headline mb-1 text-right" >$34,245</v-list-item-title>
        <div><v-divider></v-divider></div>
      </v-list-item-content> 
    </v-list-item>
    <v-card-actions>
      <v-icon text class="ma-2">credit_card</v-icon>
      <div class="overline">VISA Card</div>
    </v-card-actions>
  </v-card>
      </v-flex>
       <v-flex
        sm6
        xs12
        md6
        lg3
      >
       <v-card class="ma-3">
    <v-list-item >
       <v-list-item-avatar
        tile
        class="mt-n7"
      >
      <v-sheet color="#FFC107" width="80" height="80" elevation="10">
            <v-icon dark large>folder_shared</v-icon>
      </v-sheet>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="overline text-right">Folder shared</div>
        <v-list-item-title class="headline mb-1 text-right" >1730</v-list-item-title>
        <div><v-divider></v-divider></div>
      </v-list-item-content> 
    </v-list-item>
    <v-card-actions>
      <v-icon text class="ma-2">folder</v-icon>
      <div class="overline">Prodect</div>
    </v-card-actions>
  </v-card>
      </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
              <v-card class="text-center ma-3">
                <v-responsive class="pt-4">
                   <v-avatar size="100" class="red lighten-2">
                     <img :src="person.avatar" alt="" >
                   </v-avatar>
                </v-responsive>
                <v-card-text>
                  <div class="subheading">{{person.name}}</div>
                  <div class="grey--text">{{person.role}}</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined color="orange">
                        <v-icon small left >message</v-icon>
                        <span>Message</span>
                    </v-btn>
                </v-card-actions>
              </v-card>
        </v-flex>
       
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'team',
  components: {
   
  },
  data : () => ({
    team: [
      {name: 'Iyad', role: 'web developer', avatar:'/img1.png'},
      {name: 'Reda', role: 'Graphic designer', avatar:'/img2.png'},
      {name: 'Zineb', role: 'web developer', avatar:'/img3.png'},
      {name: 'Hu TechGroup', role: 'Desktop developer', avatar:'/img4.png'},
    ]
  }),
}
</script>-->
<!--<template>
  <div class="global">
    <form class="container">
      <button @click="show1" class="form-btn">
        <span class="btn-text">Etat Civil</span>
      </button>
      <button @click="show2" class="form-btn">
        <span class="btn-text">Experience profesionnelle</span>
      </button>
      <button @click="show3" class="form-btn">
        <span class="btn-text">Conjoint</span>
      </button>
      <div v-if="showform1">
        
        <div class="block">
          <div class="inputlabel">
            <label>Matricule:</label> <input type="number" required />
          </div>
          <div class="inputlabel">
            <label>N°dossier:</label>
            <input
              type="number"
              placeholder="entrer de numero dossier"
              required
            />
          </div>
        </div>
        <div class="block">
          <div class="inputlabel">
            <label>Nom:</label>
            <input type="text" required />
          </div>
          <div class="inputlabel">
            <label>Prenom:</label>
            <input type="text" required />
          </div>
        </div>

        <div class="block">
          <div class="inputlabel">
            <label>Date de naissance:</label>
            <input type="date" required />
          </div>
          <div class="inputlabel">
            <label>Sex:</label>
            <select>
              <option value="choisir"></option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </div>
        </div>

        <div class="block">
          <div class="inputlabel">
            <label>Wilaya de naissance:</label>
            <input type="texte" required />
          </div>
          <div class="inputlabel">
            <label>Commune:</label>
            <input type="text" required />
          </div>
        </div>
        <div class="block">
          <div class="inputlabel">
            <label>Adresse:</label>
            <input type="texte" required />
          </div>
          <div class="inputlabel">
            <label>Nombre d'enfant:</label>
            <input type="number" required />
          </div>
        </div>

        <div class="block">
          <div class="inputlabel">
            <label>Email:</label>
            <input type="email" placeholder="nom@exemple.com" required />
          </div>
          <div class="inputlabel">
            <label for>Code Postal:</label>
            <input type="code" required />
          </div>
        </div>

        <div class="block">
          <div class="inputlabel">
            <label>Prenom du pére:</label>
            <input type="texte" required />
          </div>
          <div class="inputlabel">
            <label for>Nom de mere:</label>
            <input type="texte" required />
          </div>
        </div>
        <div class="block">
          <div class="inputlabel">
            <label for>Prenom de mere:</label>
            <input type="texte" required />
          </div>
          <div class="inputlabel">
            <label>Situation familiale:</label>
            <select>
              <option value="choisir"></option>
              <option value="celibataire">celibataire</option>
              <option value="marié(e)">marié(e)</option>
              <option value="divorceé(e)">divorcé(e)</option>
              <option value="veuf(ve)">veuf(ve)</option>
            </select>
          </div>
        </div>
        <div class="inputlabel">
          <label for>Photo</label>
          <input value="Photo" type="file" />
        </div>
      </div>
      <div v-if="showform2">
        <div class="block">
          <div class="inputlabel">
            <label>ECOLE:</label>
            <input type="texte" required />
          </div>
          <div class="inputlabel">
            <label for="Matricule">Direction,Service</label>
            <input type="texte" required />
          </div>
        </div>

        <div class="block">
          <div class="inputlabel">
            <label>Date installation:</label>
            <input type="date" required />
          </div>
          <div class="inputlabel">
            <label>Autre Periode:</label>
            <input type="date" required />
          </div>
        </div>
        <div class="block">
          <div class="inputlabel">
            <label>Dernier grade:</label>
            <input ctype="texte" required />
          </div>
          <div class="inputlabel">
            <label class="labelf2">Designation du secteur</label>
            <input class="inputf2" type="date" required />
          </div>
        </div>
        <div class="block">
          <div class="inputlabel">
            <label>Date debut hors secteur:</label>
            <input type="date" required />
          </div>
          <div class="inputlabel">
            <label>Date fin hors secteur</label>
            <input type="date" required />
          </div>
        </div>
      </div>
      
      <div v-if="showform3">
        <div class="block">
          <div class="inputlabel">
            <label>Nom:</label>
            <input type="text" required />
          </div>
          <div class="inputlabel">
            <label>Prénom:</label>
            <input type="text" required />
          </div>
        </div>
        <div class="block">
          <div class="inputlabel">
            <label>Date De Naissance:</label>
            <input type="date" required />
          </div>
          <div class="inputlabel">
            <label>Wilaya De Naissance:</label>
            <input type="number" required />
          </div>
        </div>
        <div class="block">
          <div class="inputlabel">
            <label>Prénom De Pere:</label>
            <input type="text" required />
          </div>
          <div class="inputlabel">
            <label>Prénom De Mere:</label>
            <input type="text" required />
          </div>
        </div>
        <label class="labelf2">Conjoint Au MESRS :</label>
        <input class="inputf2" type="text" required />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showform1: false,
      showform2: false,
      showform3: false,
    };
  },
  methods: {
    show1() {
      this.showform1 = true;
      this.showform2 = false;
      this.showform3 = false;
    },
    show2() {
      this.showform2 = true;
      this.showform1 = false;
      this.showform3 = false;
    },
    show3() {
      this.showform3 = true;
      this.showform2 = false;
      this.showform1 = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

.form-btn {
  
  margin-right: 90px;
  height: 50px;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 5px;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  background: rgb(134, 189, 235);
}
.form-btn:hover {
  background: steelblue;
}
.form-btn:active {
  background: steelblue;
}
.btn-text {
  padding: 0 24px;
  color: #fff;
  height: 100%;
}
.span {
  align-items: right;
}

.inputlabel {
  padding-right: 100px;
}

div.block {
  display: flex;
}
form {
  font-family: "Poppins", sans-serif;
  color: black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  width: 350px;
  border: 1px solid #999;
  outline: none;
  background:white;
}

.container {
  width: 900px;
  box-shadow: 0 0 10px rgba(131, 3, 148, 0.3);
  background: #6dc5f1;
  padding: 20px;
  /*margin: 8% auto 0;*/
  text-align: center;
}
label {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
}
/*.global {
  position: absolute;
  top: 70px;
  left: 401px;
}*/
</style>-->
<!--<template>
  <v-row>
    <v-col>
      <v-sheet height="300" width="400" >
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>

</template>
<script>
  export default {
    data: () => ({
      today: '2021-05-21',
      events: [
        {
          name: 'debut quota',
          start: '2021-05-21 09:00',
          end: '2021-06-21 09:00',
        },
        {
          name: 'periode recours',
          start: '2021-06-01',
        },
      ],
    }),
    mounted () {
      this.$refs.calendar.scrollToTime('08:00')
    },
  }
</script>
<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}

</style>-->
<template>
  <div class="team">
    <h1 class="subheading grey--text">Statistiques</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="green" width="80" height="80" elevation="10">
                  <v-icon dark large>person</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">nombre demandeurs acceptes</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >{{nb_demandeurs}}</v-list-item-title
                >
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
        </v-layout>
        <v-layout row wrap>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="red" width="80" height="80" elevation="10">
                  <v-icon dark large>person</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right"> nombre demandeurs rejetes</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >{{nb_rejetes}}</v-list-item-title
                >
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
        </v-layout>
      
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
   nb_demandeurs:"40" ,
   nb_rejetes:"10",
  })
};
</script>

<style>
</style>
