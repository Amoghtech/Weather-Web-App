// http://api.weatherapi.com/v1/current.json?key=c04f7782ee194fc0abb102426213107&q=Mumbai

import citydetailsliceactions from './citydetail'


export const fetchdetail = (name) => {
  return async (dispatch) => {
    const fetchdata = async () => {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c04f7782ee194fc0abb102426213107&q=${name}`
      );
      console.log(res);
      if (res.code === 1006) {
        throw new Error('No Such Country Found');
      }
      const data = await res.json();
      return data;
    };

    fetchdata()
      .then((data) => {
        dispatch(citydetailsliceactions.setstate({
          icon: data.current.condition.icon,
          name: data.location.name,
          region: data.location.region,
          country: data.location.country,
          temp: data.current.temp_c,
          wind: data.current.wind_mph,
          humidity: data.current.humidity,
          precipitation: data.current.precip_mm,
          error:""
        }))
      })
      .catch((err) => {
       dispatch(citydetailsliceactions.seterror("Invalid location"))
      });
  };
};
