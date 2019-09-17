import { useState, useEffect } from "react";
import api from '../api'

export default function useFetch(url, method = 'get', body = {}) {
  const [data, setData] = useState([]);


// function stageRequestApi() {
//     return api.request({
//         method: 'get',
//         url: 'stage'
//     });
// }

  async function getData() {
    const response = await api.request({ method, url, data: body });
    // const response = await fetch(url);
    // const data = await response.json();
    setData(response);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
}
