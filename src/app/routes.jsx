import App from './components/App';
import Home from './containers/Home';

const routes = [
  {
    component: App,
    path: '/',
    indexRoute: {
      component: Home,
    },
  },
];

export default routes;
