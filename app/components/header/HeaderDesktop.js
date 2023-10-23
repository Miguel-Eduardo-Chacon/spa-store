const navbarItem = () => {
  return `<li class="mmenu-item--simple"><a href="/catalogo" class="active">ARMAS</a></li>
  <li class="mmenu-item--simple"><a href="/catalogo" class="active">MUNICIÓN</a></li>
  <li class="mmenu-item--simple"><a href="/catalogo" class="active">EQUIPAMENTO</a></li>
  <li class="mmenu-item--simple"><a href="/catalogo" class="active">ACCESORIOS</a></li>
  <li class="mmenu-item--simple"><a href="/catalogo" class="active">DIARIO</a></li>`
}
export const HeaderDesktop = () => {
  return `<header class="hdr-wrap">
  <div class="hdr-content hdr-content-sticky">
    <div class="container">
      <div class="row">
        <div class="col-auto show-mobile">
          <!-- Menu Toggle -->
          <div class="menu-toggle"> <a href="#" class="mobilemenu-toggle"><i class="icon-menu"></i></a>
          </div>
          <!-- /Menu Toggle -->
        </div>
        <div class="col-auto hdr-logo">
          <a href="/#" class="logo"><img
              srcset="https://storage.googleapis.com/work-resources/images/logo_test.svg 1x, https://storage.googleapis.com/work-resources/images/logo_test.svg 2x"
              alt="Logo"></a>
        </div>
        <!--navigation-->
        <div class="hdr-nav hide-mobile nav-holder-s">
        </div>
        <!--//navigation-->
        <div class="hdr-links-wrap col-auto ml-auto">
          <div class="hdr-inline-link">
            <!-- Header Search -->
            <div class="search_container_desktop">
              <div class="dropdn dropdn_search dropdn_fullwidth">
                <a href="#" class="dropdn-link  js-dropdn-link only-icon"><i
                    class="icon-search"></i><span class="dropdn-link-txt">Search</span></a>
                <div class="dropdn-content">
                  <div class="container">
                    <form method="get" action="#" class="search search-off-popular">
                      <input name="search" type="text" class="search-input input-empty"
                        placeholder="What are you looking for?">
                      <button type="submit" class="search-button"><i
                          class="icon-search"></i></button>
                      <a href="#" class="search-close js-dropdn-close"><i
                          class="icon-close-thin"></i></a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Header Search -->
            <!-- Header Wishlist -->
            <div class="dropdn dropdn_wishlist">
              <a href="account-wishlist.html" class="dropdn-link only-icon wishlist-link ">
                <i class="icon-heart"></i><span class="dropdn-link-txt">Wishlist</span><span
                  class="wishlist-qty">3</span>
              </a>
            </div>
            <!-- /Header Wishlist -->
            <!-- Header Account -->
            <div class="dropdn dropdn_account dropdn_fullheight">
              <a href="#" class="dropdn-link js-dropdn-link js-dropdn-link only-icon"
                data-panel="#dropdnAccount"><i class="icon-user"></i><span
                  class="dropdn-link-txt">Account</span></a>
            </div>
            <!-- /Header Account -->
            <div class="dropdn dropdn_fullheight minicart">
              <a href="#" class="dropdn-link js-dropdn-link minicart-link only-icon"
                data-panel="#dropdnMinicart">
                <i class="icon-basket"></i>
                <span class="minicart-qty">3</span>
                <span class="minicart-total hide-mobile">$34.99</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hdr">
    <div class="hdr-topline hdr-topline--dark js-hdr-top">
      <div class="container">
        <div class="row flex-nowrap">
          <div class="col hdr-topline-left hide-mobile">
            <!-- Header Social -->
            <div class="hdr-line-separate">
              <ul class="social-list list-unstyled">
                <li>PANTERA ARMS/ARMERÍA</li>
              </ul>
            </div>
            <!-- /Header Social -->
          </div>
          <div class="col hdr-topline-center">
            <div class="custom-text js-custom-text-carousel"
              data-slick='{"speed": 1000, "autoplaySpeed": 3000}'>
              <div class="custom-text-item"><i class="icon-fox"></i> Use promocode <span>FOXIC</span>
                to get 15% discount!</div>
              <div class="custom-text-item"><i class="icon-air-freight"></i> <span>Free</span> plane
                shipping over <span>$250</span></div>
              <div class="custom-text-item"><i class="icon-gift"></i> Today only! Post
                <span>holiday</span> Flash Sale! 2 for $20</div>
            </div>
          </div>
          <div class="col hdr-topline-right hide-mobile">
            <div class="hdr-inline-link">
              <div class="hdr_container_desktop">
                <!-- Header Account -->
                <div class="dropdn dropdn_account dropdn_fullheight">
                  <a href="#" class="dropdn-link js-dropdn-link" data-panel="#dropdnAccount"><i
                      class="icon-user"></i><span class="dropdn-link-txt">Account</span></a>
                </div>
                <!-- /Header Account -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hdr-content">
      <div class="container">
        <div class="row">
          <div class="col-auto show-mobile">
            <!-- Menu Toggle -->
            <div class="menu-toggle"> <a href="#" class="mobilemenu-toggle"><i
                  class="icon-menu"></i></a> </div>
            <!-- /Menu Toggle -->
          </div>
          <div class="col-auto hdr-logo">
            <a href="index.html" class="logo"><img
                srcset="https://storage.googleapis.com/work-resources/images/logo_test.svg 1x, https://storage.googleapis.com/work-resources/images/logo_test.svg 2x"
                alt="Logo"></a>
          </div>
          <!--navigation-->
          <div class="hdr-nav hide-mobile nav-holder justify-content-center px-4">
            <!--mmenu-->
            <ul class="mmenu mmenu-js">
              ${navbarItem()}
            </ul>
            <!--/mmenu-->
          </div>
          <!--//navigation-->
          <div class="hdr-links-wrap col-auto ml-auto">
            <div class="hdr-inline-link">
              <!-- Header Search -->
              <div class="search_container_desktop">
                <div class="dropdn dropdn_search dropdn_fullwidth">
                  <a href="#" class="dropdn-link  js-dropdn-link only-icon"><i
                      class="icon-search"></i><span class="dropdn-link-txt">Search</span></a>
                  <div class="dropdn-content">
                    <div class="container">
                      <form method="get" action="#" class="search search-off-popular">
                        <input name="search" type="text" class="search-input input-empty"
                          placeholder="What are you looking for?">
                        <button type="submit" class="search-button"><i
                            class="icon-search"></i></button>
                        <a href="#" class="search-close js-dropdn-close"><i
                            class="icon-close-thin"></i></a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Header Search -->
              <!-- Header Wishlist -->
              <div class="dropdn dropdn_wishlist">
                <a href="account-wishlist.html" class="dropdn-link only-icon wishlist-link ">
                  <i class="icon-heart"></i><span class="dropdn-link-txt">Wishlist</span><span
                    class="wishlist-qty">3</span>
                </a>
              </div>
              <!-- /Header Wishlist -->
              <div class="hdr_container_mobile show-mobile">
                <!-- Header Account -->
                <div class="dropdn dropdn_account dropdn_fullheight">
                  <a href="#" class="dropdn-link js-dropdn-link" data-panel="#dropdnAccount"><i
                      class="icon-user"></i><span class="dropdn-link-txt">Account</span></a>
                </div>
                <!-- /Header Account -->
              </div>
              <div class="dropdn dropdn_fullheight minicart">
                <a href="#" class="dropdn-link js-dropdn-link minicart-link"
                  data-panel="#dropdnMinicart">
                  <i class="icon-basket"></i>
                  <span class="minicart-qty">3</span>
                  <span class="minicart-total hide-mobile">$34.99</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>`
}