import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

//8938cbd3b8a5e2d2584f59e68d59a349
function App() {
  return (
    <div className="app">
      {/* navbar */}
      <Nav />
      {/* banner */}
      <Banner />
      <Row
        isLargeRow //default islargerow={true}
        title="NETFILX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
