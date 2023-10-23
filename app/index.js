import { App } from "./app.js";
import { Home } from "./layouts/Home.js";
import { Categoria } from "./layouts/Categoria.js";
import { NotFoundPage } from "./layouts/NotFoundPage.js";
import { getSliderElements } from "./services/api.js";
import { setVH } from "./utils/theme-functions.js";

const urlRoutes = {
  404: {
    template: NotFoundPage(),
    title: "Error 404 || Balas",
    description: ""
  },
  "/": {
    template: Home(),
    title: "Home || Balas",
    description: ""
  },
  "/catalogo": {
    template: Categoria(),
    title: "Catalogo || Balas",
    description: ""
  }
}

document.addEventListener('click', async (event) => {
  const { target } = event;
  if(!target.matches('a[href]')){
    return;
  }
  event.preventDefault();
  await urlRoute();

  document.querySelector('body').style.overflow = '';
  THEME.beforeReady.init();
	THEME.documentReady.init();
})

const urlRoute = async (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  await urlLocationHandler();
}

const urlLocationHandler = async () => {
  const location = window.location.pathname;
  if(location.length === 0){
    location = '/';
  }

  const route = urlRoutes[location] || urlRoutes["404"];
  const html = await route.template;
  await App(html);
}

document.addEventListener('DOMContentLoaded', async function(){
  const html = await urlRoutes['/'].template;
  await App(html);
  // let testApi = await getSliderElements();
  // console.log(testApi);
  THEME.beforeReady.init();
	THEME.documentReady.init();
});


window.addEventListener('load', function(){
  THEME.documentLoad.init();
})

window.addEventListener('resize', function(){
  THEME.documentResize.init();
})