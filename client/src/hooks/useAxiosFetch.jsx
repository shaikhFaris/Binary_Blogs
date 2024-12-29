import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (baseUrl) => {
  const [Data, setData] = useState([]);
  const [FetchErr, setFetchErr] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const repsonse = await axios.get(url, {
          signal: controller.signal,
        });
        if (isMounted) {
          // console.log(repsonse.data);

          setData(repsonse.data);
          setFetchErr(null);
        }
      } catch (error) {
        if (isMounted) {
          setFetchErr(error.message);
          setData([]);
        }
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };
    fetchData(baseUrl);
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [baseUrl]);

  return { Data, FetchErr, IsLoading };
};

export default useAxiosFetch;
