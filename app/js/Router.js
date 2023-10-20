import { Categoria } from "../layouts/Categoria.js";
import { Home } from "../layouts/Home.js"
import { NotFoundPage } from "../layouts/NotFoundPage.js";

export const Router = async () => {
  const { hash } = location;

  if(!hash || hash === '#'){
    return await Home();
  }else if(hash.includes('#/categoria')){
    return Categoria();
  }else{
    return NotFoundPage();
  }
}