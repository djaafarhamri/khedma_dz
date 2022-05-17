import axios from "axios";
import { useState, useEffect } from "react";

export const useDataSource = (dataSource, render) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("getting data")
        const response = await axios.get(dataSource);
        setData(response.data);
        console.log("getting data: ", response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [dataSource, render]);

  return { data, loading, error };
}