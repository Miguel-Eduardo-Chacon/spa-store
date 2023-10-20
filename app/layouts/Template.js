import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Router } from "../js/Router.js";

export const Template = async () => {
  const pageContent = await Router()
  
  const _templateHtml = `${Header()}
  ${pageContent}
  ${Footer()}`

  return _templateHtml;
}