import { useState, useEffect } from "react";

const key = "6c94bba9";

export function useMovies(query, callBack) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(
    function () {
      callBack?.();
      const controller = new AbortController();

      async function fetchMovies() {
        // const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&`);
        try {
          setIsLoading(true);
          setErr("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies ");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie Not Found");
          // console.log(data);
          setMovies(data.Search);
          setErr("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setErr(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setErr("");
        return;
      }
      //   handleCloseMovie();
      fetchMovies();
    },
    [query]
  );

  return { movies, isLoading, err };
}
