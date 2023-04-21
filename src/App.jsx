import React, {useEffect,Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Header from "./layout/header/Header";
import "./App.css";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import SearchResult from "./pages/searchResult/SearchResult";
import Details from "./pages/details/Details";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./features/api/apiSlice";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import { ThreeDots } from "react-loader-spinner";
import Footer from "./layout/footer/Footer";



function App() {
const dispatch = useDispatch();

useEffect(() => {
    fetchApiConfig();
    genresCall();
}, []);

const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {

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
  
    data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
};

  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense fallback={  
                  <div className="wrapper">
                    <div className="center">
                      <ThreeDots  
                          height="80" 
                          width="80" 
                          radius="9"
                          color="#1e90ff" 
                          ariaLabel="three-dots-loading"
                          visible={true}
                      />
                    </div>
                  </div>    
        }>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
