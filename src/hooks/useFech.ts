/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { FilmResponse } from "../interfaces/film";

export const useFetch = (url: string) => {
  const [data, setData] = useState<FilmResponse>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hashMore, setHashMore] = useState(false);

  const getData = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`,
        },
      });

      if (res.status !== 200) throw new Error("Error en la petición");

      const data: FilmResponse = await res.json();
      setData((prevData) => {
        return {
          ...data,
          results: [...(prevData?.results || []), ...data.results],
        };
      });
      setHashMore(data.page < data.total_pages);
      setLoading(false);
    } catch (error: Error | any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, error, hashMore };
};
