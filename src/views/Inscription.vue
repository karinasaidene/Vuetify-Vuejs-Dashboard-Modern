<!--<template>
  <form novalidate="novalidate" class="v-form">
    <div class="container py-0">
      <div class="row">
        <div class="col-md-4 col-12">
          <div
            class="v-input v-input--is-disabled theme--light v-text-field v-text-field--is-booted"
          >
            
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div
            class="v-input purple-input theme--light v-text-field v-text-field--is-booted"
          >
          </div>
        </div>
        <v-flex xs6 sm8 >
        <div class="col-md-4 col-12">
          <div
            class="v-input purple-input theme--light v-text-field v-text-field--is-booted"
          >
            <div class="v-input__control">
              <div class="v-input__slot">
                <div class="v-text-field__slot">
                  <label
                    autofocus
                    class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute"
                    >Adresse email</label
                  ><input  type="text" required/>
                </div>
              </div>
              <div class="v-text-field__details">
                <div class="v-messages theme--light">
                  <div class="v-messages__wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </v-flex>
        <v-flex xs6 sm8 >
        <div class="col-md-6 col-12">
          <div
            class="v-input purple-input theme--light v-text-field v-text-field--is-booted"
          >
            <div class="v-input__control">
              <div class="v-input__slot">
                <div class="v-text-field__slot">
                  <label
                    for="input-204"
                    class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute"
                    >mot de passe</label
                  ><input id="input-204" type="text" />
                </div>
              </div>
              <div class="v-text-field__details">
                <div class="v-messages theme--light">
                  <div class="v-messages__wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </v-flex>
        <v-flex xs6 sm8 >
        <div class="col-md-6 col-12">
          <div
            class="v-input purple-input theme--light v-text-field v-text-field--is-booted"
          >
            <div class="v-input__control">
              <div class="v-input__slot">
                <div class="v-text-field__slot">
                  <label
                    for="input-207"
                    class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute"
                    >confirmation mot de passe</label
                  ><input id="input-207" type="text" />
                </div>
              </div>
              <div class="v-text-field__details">
                <div class="v-messages theme--light">
                  <div class="v-messages__wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </v-flex>
        
        <div class="text-right col col-12">
          <v-btn outlined color="orange">
                        <v-icon small left >person</v-icon>
                        <span>s'inscrire</span>
                    </v-btn>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>-->
<template>
  <v-card>
        <v-card-title>Inscription </v-card-title>
        <v-card-text>
        <v-form>
            <v-text-field label="Email" v-model="email" required :rules="[v => !!v || 'veuillez saisir votre adresse email']"></v-text-field>
            <v-text-field label="mot_de_passe" v-model="mot_de_passe" type="password" required :rules="[v => !!v || 'veuillez saisir votre mot de passe']"></v-text-field>
            <v-text-field label="confirmation mot de passe" v-model="confirmation_mot_de_passe" type="password" required :rules="[v => !!v || 'veuillez saisir le meme mot de passe']"></v-text-field>
            <v-checkbox
              v-model="administrateur"
              label="administrateur"
              color=red
              value="administrateur"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="valideur"
              label="valideur"
              color=#3cd1c2
              value="valideur"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="editeur"
              label="editeur"
              color=orange
              value="editeur"
              hide-details
            ></v-checkbox>
        </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn outlined color="orange">
                        <v-icon small left >person</v-icon>
                        <span>s'inscrire</span>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>