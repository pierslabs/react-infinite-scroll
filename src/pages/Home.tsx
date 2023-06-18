import { useCallback, useRef, useState } from "react";
import { useFetch } from "../hooks/useFech";
import Layout from "../Layout/Layout";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export interface Film {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, hashMore } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?page=${page}`
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastFilm = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hashMore) {
          setPage((page) => page + 1);
        }
      }, {});

      if (node) observer.current.observe(node);
    },
    [loading, hashMore]
  );

  return (
    <Layout>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h1" component="div" gutterBottom>
          Home
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Link
            className="link"
            to="https://github.com/pierslabs/react-infinite-scroll/blob/main/src/pages/Home.tsx"
          >
            {"< code >"}
          </Link>
        )}
      </Box>

      <TableContainer component={Paper} sx={{ height: 600 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>

              <TableCell align="center">Avatar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.results?.map((film: Film, index: number) => {
              if (data.results.length === index + 1) {
                return (
                  <TableRow
                    key={film.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row" ref={lastFilm}>
                      {film.id}
                    </TableCell>
                    <TableCell align="center">{film.title}</TableCell>

                    <TableCell align="center">
                      <img
                        className="img-table"
                        src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                      />
                    </TableCell>
                  </TableRow>
                );
              } else {
                return (
                  <>
                    <TableRow
                      key={film.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {film.id}
                      </TableCell>
                      <TableCell align="center">{film.title}</TableCell>

                      <TableCell align="center">
                        <img
                          width={100}
                          className="img-table"
                          src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                        />
                      </TableCell>
                    </TableRow>
                  </>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Home;
