<template>
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
      <!--***************************************** */    -->
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
  background: #00a8cc;
}
.form-btn:hover {
  background:#0c7b93;
}
.form-btn:active {
  background: #0c7b93;
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
  background: #27496d;
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
</style>

