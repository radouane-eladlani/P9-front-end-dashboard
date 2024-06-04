import { useState, useEffect, useCallback } from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mock/data';
const mode = "dev";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    if (mode === "dev") {
      const module = url.substring(url.lastIndexOf("/") + 1);
      switch (module) {
        case "activity":
          setData({data: USER_ACTIVITY});
          break;
        case "average-sessions":
          setData({data: USER_AVERAGE_SESSIONS}); 
          break;
        case "performance":
          setData({data:USER_PERFORMANCE});
          break;
        default:
          setData({data:USER_MAIN_DATA});
          break;
      }
      setLoading(false);
    } else {


      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetch;