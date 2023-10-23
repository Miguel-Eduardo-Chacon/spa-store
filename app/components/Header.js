import { HeaderDesktop } from "./header/HeaderDesktop.js"
import { HeaderMobile } from "./header/HeaderMobile.js"

export const Header = () => {
  const _headerHtml = `<!--header-->
  ${HeaderDesktop()}
  ${HeaderMobile()}
  <!--//header-->`
  return _headerHtml
}