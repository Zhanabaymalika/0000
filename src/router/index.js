import { createRouter, createWebHistory } from 'vue-router';
import CharacterList from '../views/CharacterList.vue';
import CharacterDetails from '../views/CharacterDetails.vue';

const routes = [
  {
    path: '/',
    name: 'CharacterList',
    component: CharacterList,
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: CharacterDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
