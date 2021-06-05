import Vue from 'vue'
import VueRouter from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import Utilisateur from '../views/Utilisateur.vue'
import Historique from '../views/Historique.vue'
import Saisie from '../views/Saisie.vue'
import Recours from '../views/Recours.vue'
import Parametres from '../views/Parametres.vue'
import Inscription from '../views/Inscription.vue'
import Demandeurs from '../views/Demandeurs.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'acceuil',
    component: Acceuil
  },
  {
    path: '/Utilisateur',
    name: 'utilisateur',
    component: Utilisateur
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/historique',
    name: 'historique',
    component: Historique
  },
  
  {
    path: '/saisie',
    name: 'saisie',
    component: Saisie
  },
  {
    path: '/recours',
    name: 'recours',
    component: Recours
  },
  {
    path: '/parametres',
    name: 'parametres',
    component: Parametres
  },
  {
    path: '/Inscription',
    name: 'inscription',
    component: Inscription
  },
  {
    path: '/Demandeurs',
    name: 'demandeurs',
    component: Demandeurs
  }


  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
