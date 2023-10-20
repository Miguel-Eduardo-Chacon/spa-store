function calcScrollWidth() {
  var html = $('<div style="width:100px;height:100px;overflow:scroll;visibility: hidden;"><div style="height:200px;"></div>');
  document.querySelector('body').append(html);
  var w = html[0].offsetWidth - html[0].clientWidth;
  $(html).remove();
  return w;
};

export function setVH() {
  let vh = window.innerHeight * 0.01;
  let scrollWidth = calcScrollWidth()
  let styleAttribute = `--vh: ${vh}px; --scrollW: ${scrollWidth}px;`

  document.querySelector('html').setAttribute('style', styleAttribute)
};
