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
      .then((data) => {})
      .catch((err) => {});
  };
};
