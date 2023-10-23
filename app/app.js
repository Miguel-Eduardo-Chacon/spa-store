import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";

export const App = async (pageContent) => {
  const $root = document.getElementById('root');
  $root.innerHTML = ''
  $root.innerHTML += await Header();
  $root.innerHTML += pageContent;
  $root.innerHTML += await Footer();
}