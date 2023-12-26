import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    setloading("Loading...");
    setdata(null);
    seterror(null);

    fetchDataFromApi(url)
      .then((res) => {
        setloading(false);
        setdata(res);
      })
      .catch((err) => {
        setloading(false);
        seterror("Something went wrong");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
