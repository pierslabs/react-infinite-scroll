import { useCallback, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFech";
import { Film } from "../../interfaces/film";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const MuiTable = () => {
  const [page, setPage] = useState(1);
  const url = `https://api.themoviedb.org/3/discover/movie?page=${page}`;
  const codeUrl =
    "https://github.com/pierslabs/react-infinite-scroll/blob/main/src/components/MuiTable/MuiTable.tsx";
  const { data, loading, hashMore } = useFetch(url);
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
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" component="div" gutterBottom>
          Mui Table Example
        </Typography>
        <Typography
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          marginRight={7}
        >
          Pages
          <span className="pageNumber"> {page}</span>
        </Typography>
        <Link className="link" to={codeUrl} target="_blank">
          {"< code >"}
        </Link>
      </Box>

      <TableContainer component={Paper} sx={{ height: { xs: 1300, sm: 650 } }}>
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}

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
    </>
  );
};

export default MuiTable;
