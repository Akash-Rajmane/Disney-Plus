import React, {useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Header from "./layout/Header";
import "./App.css";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import SearchResult from "./pages/searchResult/SearchResult";
import Detail from "./layout/Detail";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./features/api/apiSlice";

function App() {
const dispatch = useDispatch();
const { url } = useSelector((state) => state.api);
console.log(url);

useEffect(() => {
    fetchApiConfig();
    genresCall();
}, []);

const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
        console.log(res);

        const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        };

        dispatch(getApiConfiguration(url));
    });
};

const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
};

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
