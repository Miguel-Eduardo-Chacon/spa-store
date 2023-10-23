import { getSliderElements } from "../services/api.js"

// @param {Object} videoProps
const setVideoElement = (videoProps) => {
  const { button } = videoProps;
  const _videoElementHtml = `<div class="bnslider-slide" data-autoplay="${videoProps.autoplay}" data-video-type="${videoProps.type}">
    <div class="video-wrap">
      <video playsinline loop muted preload="auto">
        <source src="${videoProps.src}" type="video/mp4">
      </video>
    </div>
    <div class="bnslider-text-wrap bnslider-overlay container">
      <div class="bnslider-text-content txt-middle txt-center txt-middle-m txt-center-m">
        <div class="bnslider-text-content-flex containe ">
          <div class="bnslider-vert">
            <div class="bnslider-text order-1 mt-sm bnslider-text--xl  text-center  " data-animation="fadeInUp" data-animation-delay="800" data-fontcolor="#ffffff" data-fontweight="900" data-fontline="1.00" data-otherstyle="">${videoProps.text}</div>
            <div class="btn-wrap text-center  order-4 mt-lg"
              data-animation="fadeIn"
              data-animation-delay="2000">
              <a 
                href="${button.href}" 
                target="${button.target}" 
                class="btn" 
                ${button.color !== '' ? `data-color="${button.color}"` : ''}
                ${button["bg-color"] !== '' ? `data-bgcolor="${button.color}"` : ''}
                data-hover-bgcolor="#33cad5" 
              >
                MIRA NUESTROS CATÁLOGOS >>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  return _videoElementHtml;
}
const setImageElement = (imageProps) => {
  const { button } = imageProps;
  const _imageElementHtml = `<div class="bnslider-slide">
  <div class="bnslider-image-mobile lazyload"
    data-bgset="${imageProps.src.mobile}"></div>
  <div class="bnslider-image lazyload"
    data-bgset="${imageProps.src.desktop}"></div>
  <div class="bnslider-text-wrap bnslider-overlay ">
    <div class="bnslider-text-content txt-middle txt-middle-m txt-center-m">
      <div class="bnslider-text-content-flex ">
        <div class="bnslider-vert w-s-60 w-ms-100" style="padding: 0px">
          <div class="bnslider-text order-1 mt-sm bnslider-text--md text-center data-ini"
            data-animation="fadeInUp" data-animation-delay="800"
            data-fontcolor="#ffffff" data-fontweight="700" data-fontline="1.5">${imageProps.text}</div>
          <div class="btn-wrap order-4 mt-md" data-animation="fadeIn"
            data-animation-delay="2000" style="opacity: 1;">
            <a 
              href="${button.href}" 
              target="${button.target}" 
              class="btn"
              ${button.color !== '' ? `data-color="${button.color}"` : ''}
              ${button["bg-color"] !== '' ? `data-bgcolor="${button.color}"` : ''}
            >
              MIRA NUESTROS CATÁLOGOS >>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
return _imageElementHtml;
}

export const SliderElement = async () => {
  // Logic
  const { slider } = await getSliderElements();
  let _sliderELementsHtml = '';
  slider.forEach(element => {
    if(element.type === 'video'){
      _sliderELementsHtml += setVideoElement(element);
    }else if(element.type === 'image'){
      _sliderELementsHtml += setImageElement(element);
    }
  });

  return _sliderELementsHtml;
}