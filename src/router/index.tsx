import Login from '../pages/Login';
import HelloWorld from '../pages/HelloWorld';
const routes = [
  {
    path: "/",
    exact: true,
    component: Login
  },
  {
    path: "/home",
    exact: true,
    component: Login,
    routes: [{
      path: "/hello",
      component: HelloWorld
    }]

  }
];

export default routes;
