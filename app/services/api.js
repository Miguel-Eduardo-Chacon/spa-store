const BASE_URL = '../../json',
  PAGE = {
    HOME: '/home'
  },
  HOME_FILE = {
    SLIDER: '/slider.json'
  }


export const getSliderElements = async () => {
  const options = {
    method: 'GET'
  }
  const queryUrl = `${BASE_URL}${PAGE.HOME}${HOME_FILE.SLIDER}`;

  try{
    const response = await fetch(queryUrl, options);
    const sliderData = await response.json();
    return sliderData
  }catch(error){
    console.log(error)
    return
  }

}