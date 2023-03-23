import { useState, useEffect } from "react";

const useFetch = (url) => {
  let [state, setState] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await window.fetch(url);
      let data = await response.json();
      setState(data);
    };
    fetchData();
  }, [url]);
  return state;
};

export default useFetch;
 