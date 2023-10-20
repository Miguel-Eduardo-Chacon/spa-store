export const Header = () => {
  const _headerHtml = `<!--header-->
  <header class="hdr-wrap">
    <div class="hdr-content hdr-content-sticky">
  <div class="container">
    <div class="row">
      <div class="col-auto show-mobile">
        <!-- Menu Toggle -->
  <div class="menu-toggle"> <a href="#" class="mobilemenu-toggle"><i class="icon-menu"></i></a> </div>
  <!-- /Menu Toggle -->
      </div>
      <div class="col-auto hdr-logo">
        <a href="/#" class="logo"><img srcset="https://storage.googleapis.com/work-resources/images/logoipsum.svg 1x, https://storage.googleapis.com/work-resources/images/logoipsum.svg 2x" alt="Logo"></a>
      </div>
      <div class="hdr-phone hide-mobile">
        <i class="icon-phone"></i><span>+ 7 555 35 305</span>
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
    <a href="#" class="dropdn-link  js-dropdn-link only-icon"><i class="icon-search"></i><span class="dropdn-link-txt">Buscar</span></a>
    <div class="dropdn-content">
      <div class="container">
        <form method="get" action="#" class="search search-off-popular">
          <input name="search" type="text" class="search-input input-empty" placeholder="¿Qué estás buscando?">
          <button type="submit" class="search-button"><i class="icon-search"></i></button>
          <a href="#" class="search-close js-dropdn-close"><i class="icon-close-thin"></i></a>
        </form>
      </div>
    </div>
  </div>
  </div>
  <!-- /Header Search -->
          <!-- Header Wishlist -->
  <div class="dropdn dropdn_wishlist">
  <a href="account-wishlist.html" class="dropdn-link only-icon wishlist-link ">
    <i class="icon-heart"></i><span class="dropdn-link-txt">Lista de deseados</span><span class="wishlist-qty">3</span>
  </a>
  </div>
  <!-- /Header Wishlist -->
          <!-- Header Account -->
  <div class="dropdn dropdn_account dropdn_fullheight">
  <a href="#" class="dropdn-link js-dropdn-link js-dropdn-link only-icon" data-panel="#dropdnAccount"><i class="icon-user"></i><span class="dropdn-link-txt">Mi cuenta</span></a>
  </div>
  <!-- /Header Account -->
          <div class="dropdn dropdn_fullheight minicart">
  <a href="#" class="dropdn-link js-dropdn-link minicart-link only-icon" data-panel="#dropdnMinicart">
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
    <div class="hdr hdr-style2">
        <div class="hdr-topline js-hdr-top">
            <div class="container">
                <div class="row">
                    <div class="col hdr-topline-left">
                        <!-- Header Social -->
  <div class="hdr-line-separate">
  <ul class="social-list list-unstyled">
    <li>
      <a href="#"><i class="icon-facebook"></i></a>
    </li>
    <li>
      <a href="#"><i class="icon-twitter"></i></a>
    </li>
    <li>
      <a href="#"><i class="icon-google"></i></a>
    </li>
    <li>
      <a href="#"><i class="icon-instagram"></i></a>
    </li>
    <li>
      <a href="#"><i class="icon-vimeo"></i></a>
    </li>
    <li>
      <a href="#"><i class="icon-linkedin"></i></a>
    </li>
  </ul>
  </div>
  <!-- /Header Social -->
                    </div>
                    <div class="col hdr-topline-right hide-mobile">
                        <div class="hdr-inline-link">
                            
                            <!-- Header Account -->
  <div class="dropdn dropdn_account dropdn_fullheight">
  <a href="#" class="dropdn-link js-dropdn-link" data-panel="#dropdnAccount"><i class="icon-user"></i><span class="dropdn-link-txt">Mi cuenta</span></a>
  </div>
  <!-- /Header Account -->
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
  <div class="menu-toggle"> <a href="#" class="mobilemenu-toggle"><i class="icon-menu"></i></a> </div>
  <!-- /Menu Toggle -->
                    </div>
                    <!--navigation-->
                    <div class="col-8 hdr-nav hide-mobile nav-holder">
                        <!--mmenu-->
  <ul class="mmenu mmenu-js">
  <li class="mmenu-item--simple"><a href="/#" class="active">Inicio</a>
  </li>
  <li class="mmenu-item--simple"><a href="#">Productos</a>
    <div class="mmenu-submenu">
      <ul class="submenu-list">
  <li><a href="/#/categoria">Categorías</a>
    <ul>
      <li><a href="/#/categoria">Categoría 1<span class="menu-label menu-label--color3">Popular</span></a></li>
      <li><a href="/#/categoria">Categoría 2</a></li>
      <li><a href="/#/categoria">Categoría 3</a></li>
      <li><a href="/#/categoria">Categoría 4</a></li>
      <li><a href="/#/categoria">Categoría 5</a></li>
      <li><a href="/#/categoria">Categoría 6</a></li>
      <li><a href="/#/categoria">Categoría 7</a></li>
    </ul>
  </li>
  </ul>
    </div>
  </li>
  <li class="mmenu-item--simple"><a href="#">Destacados <span class="menu-label">Nuevo</span></a>
    <div class="mmenu-submenu">
      <ul class="submenu-list">
  <li><a href="/#/categoria">Calzado</a>
    <ul>
      <li><a href="/#/categoria">Tacones</a></li>
      <li><a href="/#/categoria">Botas</a></li>
      <li><a href="/#/categoria">Sandalias</a></li>
      <li><a href="/#/categoria">Zapatillas</a></li>
    </ul>
  </li>
  <li><a href="/#/categoria">Parte Superior</a>
    <ul>
      <li><a href="/#/categoria">Vestidos<span class="menu-label menu-label--color3">Popular</span></a></li>
      <li><a href="/#/categoria">Polos & Tops</a></li>
      <li><a href="/#/categoria">Abrigos & Casacas</a></li>
      <li><a href="/#/categoria">Chompas</a></li>
    </ul>
  </li>
  <li><a href="/#/categoria">Parte Inferior</a>
    <ul>
      <li><a href="/#/categoria">Jeans</a></li>
      <li><a href="/#/categoria">Pantalones</a></li>
      <li><a href="/#/categoria">Pantuflas</a></li>
      <li><a href="/#/categoria">Trajes</a></li>
      <li><a href="/#/categoria">Calcetines</a></li>
    </ul>
  </li>
  <li><a href="/#/categoria">Accesorios</a>
    <ul>
      <li><a href="/#/categoria">Lentes & Gafas</a></li>
      <li><a href="/#/categoria">Sombreros</a></li>
      <li><a href="/#/categoria">Relojes</a></li>
      <li><a href="/#/categoria">Joyería</a></li>
      <li><a href="/#/categoria">Cinturones</a></li>    
    </ul>
  </li>
  <li><a href="/#/categoria">Bolsos</a>
    <ul>
      <li><a href="/#/categoria">Carteras</a></li>
      <li><a href="/#/categoria">Mochilas</a></li>
      <li><a href="/#/categoria">Maletas</a></li>
      <li><a href="/#/categoria">Billeteras</a></li>
    </ul>
  </li>
  </ul>
    </div>
  </li>
  <li><a href="/blog">Blog</a></li>
  </ul>
  <!--/mmenu-->
                    </div>
                    <!--//navigation-->
                    <div class="hdr-logo">
                        <a href="/#" class="logo"><img srcset="https://storage.googleapis.com/work-resources/images/logoipsum.svg 1x, https://storage.googleapis.com/work-resources/images/logoipsum.svg 2x" alt="Logo"></a>
                    </div>
                    <div class="col col-lg-8 hdr-links-wrap">
                        <div class="hdr-links">
                            <div class="hdr-phone">
                                <i class="icon-phone"></i><span>+ 7 555 35 305</span>
                            </div>
                            <div class="hdr-inline-link">
                                <!-- Header Search -->
  <div class="search_container_desktop">
  <div class="dropdn dropdn_search dropdn_fullwidth">
    <a href="#" class="dropdn-link  js-dropdn-link only-icon"><i class="icon-search"></i><span class="dropdn-link-txt">Search</span></a>
    <div class="dropdn-content">
      <div class="container">
        <form method="get" action="#" class="search search-off-popular">
          <input name="search" type="text" class="search-input input-empty" placeholder="¿Qué estás buscando?">
          <button type="submit" class="search-button"><i class="icon-search"></i></button>
          <a href="#" class="search-close js-dropdn-close"><i class="icon-close-thin"></i></a>
        </form>
      </div>
    </div>
  </div>
  </div>
  <!-- /Header Search -->
                                <!-- Header Compare -->
  <div class="dropdn dropdn_wishlist">
  <a href="#" class="dropdn-link only-icon wishlist-link">
    <i class="icon-heart"></i><span class="dropdn-link-txt">Wishlist</span><span class="compare-qty">3</span>
  </a>
  </div>
  <!-- /Header Compare -->
                                <div class="hdr_container_mobile show-mobile">
                                    <!-- Header Account -->
  <div class="dropdn dropdn_account dropdn_fullheight">
  <a href="#" class="dropdn-link js-dropdn-link" data-panel="#dropdnAccount"><i class="icon-user"></i><span class="dropdn-link-txt">Account</span></a>
  </div>
  <!-- /Header Account -->
                                </div>
                                <div class="dropdn dropdn_fullheight minicart">
  <a href="#" class="dropdn-link js-dropdn-link minicart-link" data-panel="#dropdnMinicart">
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
        <div class="hdr-promoline hdr-topline hdr-topline--dark">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="custom-text js-custom-text-carousel" data-slick='{"speed": 1000, "autoplaySpeed": 3000}'>
  <div class="custom-text-item"><i class="icon-fox"></i> ¡Obten un 15% de descuento con el cupón <span>FOXIC</span>!</div>
  <div class="custom-text-item"><i class="icon-air-freight"></i> Compra más de <span>$250</span> y llévate un boleto de avión <span>Gratis</span></div>
  <div class="custom-text-item"><i class="icon-gift"></i> ¡Solo por hoy! DSCTO. 2x1 al postear <span>#VacacionesEnVenta</span></div>
  </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </header>
  <div class="header-side-panel">
    <!-- Mobile Menu -->
  <div class="mobilemenu js-push-mbmenu">
  <div class="mobilemenu-content">
    <div class="mobilemenu-close mobilemenu-toggle">X Cerrar</div>
    <div class="mobilemenu-scroll">
      <div class="mobilemenu-search"></div>
      <div class="nav-wrapper show-menu">
        <div class="nav-toggle">
          <span class="nav-back"><i class="icon-angle-left"></i></span>
          <span class="nav-title"></span>
          <a href="#" class="nav-viewall">Ver todo</a>
        </div>
        <ul class="nav nav-level-1">
          <li>
            <a href="/#">Inicio<span class="arrow"><i class="icon-angle-right"></i></span></a>
          </li>
          <li><a href="#">Productos<span class="arrow"><i class="icon-angle-right"></i></span></a>
            <ul class="nav-level-2">
              <li><a href="#">Categorías<span class="arrow"><i class="icon-angle-right"></i></span></a>
                <ul class="nav-level-3">
                  <li><a href="/#/categoria">Categoría 1</a></li>
                  <li><a href="/#/categoria">Categoría 2</a></li>
                  <li><a href="/#/categoria">Categoría 3</a></li>
                  <li><a href="/#/categoria">Categoría 4</a></li>
                  <li><a href="/#/categoria">Categoría 5</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Destacados<span class="menu-label menu-label--color1">New</span><span class="arrow"><i class="icon-angle-right"></i></span></a>
            <ul class="nav-level-2">
              <li><a href="/#/categoria">Calzado<span class="arrow"><i class="icon-angle-right"></i></span></a>
                <ul class="nav-level-3">
                  <li><a href="/#/categoria">Tacones</a></li>
                  <li><a href="/#/categoria">Botas</a></li>
                  <li><a href="/#/categoria">Sandalias</a></li>
                  <li><a href="/#/categoria">Zapatillas</a></li>
                </ul>
              </li>
              <li><a href="/#/categoria">Parte Superior<span class="arrow"><i class="icon-angle-right"></i></span></a>
                <ul class="nav-level-3">
                  <li><a href="/#/categoria">Vestidos</a></li>
                  <li><a href="/#/categoria">Polos &amp; Tops</a></li>
                  <li><a href="/#/categoria">Abrigos &amp; Casacas</a></li>
                  <li><a href="/#/categoria">Chompas</a></li>
                </ul>
              </li>
              <li><a href="/#/categoria">Parte Inferior<span class="arrow"><i class="icon-angle-right"></i></span></a>
                <ul class="nav-level-3">
                  <li><a href="/#/categoria">Jeans</a></li>
                  <li><a href="/#/categoria">Pantalones</a></li>
                  <li><a href="/#/categoria">Pantuflas</a></li>
                  <li><a href="/#/categoria">Trajes</a></li>
                  <li><a href="/#/categoria">Calcetines</a></li>
                </ul>
              </li>
              <li><a href="/#/categoria">Accesorios<span class="arrow"><i class="icon-angle-right"></i></span></a>
                <ul class="nav-level-3">
                  <li><a href="/#/categoria">Lentes &amp; Gafas</a></li>
                  <li><a href="/#/categoria">Sombreros</a></li>
                  <li><a href="/#/categoria">Relojes</a></li>
                  <li><a href="/#/categoria">Joyería</a></li>
                  <li><a href="/#/categoria">Cinturones</a></li>
                </ul>
              </li>
              <li><a href="/#/categoria">Bolsos<span class="arrow"><i class="icon-angle-right"></i></span></a>
                <ul class="nav-level-3">
                  <li><a href="/#/categoria">Carteras</a></li>
                  <li><a href="/#/categoria">Mochilas</a></li>
                  <li><a href="/#/categoria">Maletas</a></li>
                  <li><a href="/#/categoria">Billeteras</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="/blog">Blog<span class="arrow"><i class="icon-angle-right"></i></span></a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  <!-- /Mobile Menu -->
    <div class="dropdn-content account-drop" id="dropdnAccount">
  <div class="dropdn-content-block">
    <div class="dropdn-close"><span class="js-dropdn-close">X Cerrar</span></div>
    <ul>
      <li><a href="/registro"><span>Acceder</span><i class="icon-login"></i></a></li>
      <li><a href="/registro"><span>Registrarse</span><i class="icon-user2"></i></a></li>
      <li><a href="/checkout"><span>Ir al Checkout</span><i class="icon-card"></i></a></li>
    </ul>
    <div class="dropdn-form-wrapper">
      <h5>Acceso Rápido</h5>
      <form action="#">
        <div class="form-group">
          <input type="text" class="form-control form-control--sm is-invalid" placeholder="Ingresa tu correo">
          <div class="invalid-feedback">* El campo no puede estar vacío</div>
        </div>
        <div class="form-group">
          <input type="password" class="form-control form-control--sm" placeholder="Ingresa tu contraseña">
        </div>
        <button type="submit" class="btn">Ingresar</button>
      </form>
    </div>
  </div>
  <div class="drop-overlay js-dropdn-close"></div>
  </div>
  <div class="dropdn-content minicart-drop" id="dropdnMinicart">
  <div class="dropdn-content-block">
    <div class="dropdn-close"><span class="js-dropdn-close">X Cerrar</span></div>
    <div class="minicart-drop-content js-dropdn-content-scroll">
      <div class="minicart-prd row">
        <div class="minicart-prd-image image-hover-scale-circle col">
          <a href="/producto"><img class="lazyload fade-up" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://storage.googleapis.com/work-resources/images/skins/fashion/products/product-01-1.jpg" alt=""></a>
        </div>
        <div class="minicart-prd-info col">
          <div class="minicart-prd-tag">Parte inferior</div>
          <h2 class="minicart-prd-name"><a href="/producto">Pantalones de Cuero</a></h2>
          <div class="minicart-prd-qty"><span class="minicart-prd-qty-label">Cantidad:</span><span class="minicart-prd-qty-value">1</span></div>
          <div class="minicart-prd-price prd-price">
            <div class="price-old">$200.00</div>
            <div class="price-new">$180.00</div>
          </div>
        </div>
        <div class="minicart-prd-action">
          <a href="#" class="js-product-remove" data-line-number="1"><i class="icon-recycle"></i></a>
        </div>
      </div>
      <div class="minicart-prd row">
        <div class="minicart-prd-image image-hover-scale-circle col">
          <a href="/producto"><img class="lazyload fade-up" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://storage.googleapis.com/work-resources/images/skins/fashion/products/product-16-1.jpg" alt=""></a>
        </div>
        <div class="minicart-prd-info col">
          <div class="minicart-prd-tag">Parte Superior</div>
          <h2 class="minicart-prd-name"><a href="/producto">Camisa Casual</a></h2>
          <div class="minicart-prd-qty"><span class="minicart-prd-qty-label">Cantidad:</span><span class="minicart-prd-qty-value">1</span></div>
          <div class="minicart-prd-price prd-price">
            <div class="price-old">$200.00</div>
            <div class="price-new">$180.00</div>
          </div>
        </div>
        <div class="minicart-prd-action">
          <a href="#" class="js-product-remove" data-line-number="2"><i class="icon-recycle"></i></a>
        </div>
      </div>
      <div class="minicart-empty js-minicart-empty d-none">
        <div class="minicart-empty-text">Tu carrito está vacío</div>
        <div class="minicart-empty-icon">
          <i class="icon-shopping-bag"></i>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 306 262" style="enable-background:new 0 0 306 262;" xml:space="preserve"><path class="st0" d="M78.1,59.5c0,0-37.3,22-26.7,85s59.7,237,142.7,283s193,56,313-84s21-206-69-240s-249.4-67-309-60C94.6,47.6,78.1,59.5,78.1,59.5z"/></svg>
        </div>
      </div>
      <a href="#" class="minicart-drop-countdown mt-3">
        <div class="countdown-box-full">
          <div class="row no-gutters align-items-center">
            <div class="col-auto"><i class="icon-gift icon--giftAnimate"></i></div>
            <div class="col">
              <div class="countdown-txt">CUANDO COMPRES 2 PRODUCTOS TE REGALAMOS EL TERCERO</div>
              <div class="countdown js-countdown" data-countdown="2021/07/01"></div>
            </div>
          </div>
        </div>
      </a>
      <div class="minicart-drop-info d-none d-md-block">
        <div class="shop-feature-single row no-gutters align-items-center">
          <div class="shop-feature-icon col-auto"><i class="icon-truck"></i></div>
          <div class="shop-feature-text col"><b>SHIPPING!</b> Continue shopping to add more products and receive free shipping</div>
        </div>
      </div>
    </div>
    <div class="minicart-drop-fixed js-hide-empty">
      <div class="loader-horizontal-sm js-loader-horizontal-sm" data-loader-horizontal=""><span></span></div>
      <div class="minicart-drop-total js-minicart-drop-total row no-gutters align-items-center">
        <div class="minicart-drop-total-txt col-auto heading-font">Subtotal</div>
        <div class="minicart-drop-total-price col" data-header-cart-total="">$340</div>
      </div>
      <div class="minicart-drop-actions">
        <a href="/mi-carrito" class="btn btn--md btn--grey"><i class="icon-basket"></i><span>Ir a mi Carrito</span></a>
        <a href="/checkout" class="btn btn--md"><i class="icon-checkout"></i><span>Ir a pagar</span></a>
      </div>
      <ul class="payment-link mb-2">
        <li><i class="icon-amazon-logo"></i></li>
        <li><i class="icon-visa-pay-logo"></i></li>
        <li><i class="icon-skrill-logo"></i></li>
        <li><i class="icon-klarna-logo"></i></li>
        <li><i class="icon-paypal-logo"></i></li>
        <li><i class="icon-apple-pay-logo"></i></li>
      </ul>
    </div>
  </div>
  <div class="drop-overlay js-dropdn-close"></div>
  </div>
  
  </div>
  <!--//header-->`
  return _headerHtml
}