import { Router } from "./js/Router.js";
import { Template } from "./layouts/Template.js";

export const App = async () => {
  const $root = document.getElementById('root');
  $root.innerHTML = ''

  $root.innerHTML = await Template();
}