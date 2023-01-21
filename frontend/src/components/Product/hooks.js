import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query, page,url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let [list, setList] = useState([]);
    const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
        await setError(false);
        
      const res = await axios.get(url);
      await setList((prev) => [
        ...new Set([...prev, ...res.data.products.map((d) => d)])
      ]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [url]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
