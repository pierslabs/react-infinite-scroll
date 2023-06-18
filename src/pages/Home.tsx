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
import { MuiTable } from "../components/MuiTable";

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
  return (
    <Layout>
      <MuiTable />
    </Layout>
  );
};

export default Home;
