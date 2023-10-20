import { App } from "./app.js";
import { getSliderElements } from "./services/api.js";
import { setVH } from "./utils/theme-functions.js";

document.addEventListener('DOMContentLoaded', async function(){
  await App();
  // let testApi = await getSliderElements();
  // console.log(testApi);
	THEME.documentReady.init();
});

window.addEventListener('hashchange', async function(){
  await App();
  document.querySelector('body').style.overflow = '';
	THEME.documentReady.init();
})

window.addEventListener('load', function(){
  THEME.documentLoad.init();
})

window.addEventListener('resize', function(){
  THEME.documentResize.init();
})