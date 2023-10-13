//-------------------------------------------------------------
import { createRouter, createWebHistory } from 'vue-router';
//-------------------------------------------------------------
export default createRouter({
  routes: [
    {
      path: '/',
      name: 'HOME-PAGE',
      alias: ['/start', '/home'],
      children: [
        {
          path: '/home',
          name: 'HOME-PAGE',
          children: [],
        },
      ],
    },
  ],
  history: createWebHistory(),
});
//-------------------------------------------------------------
