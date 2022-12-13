import React from "react";
import FooterComponent from "./component/footer/footer";
import HeaderComponent from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchView from "./pages/searchView/SearchView";
import HomeView from "./pages/homeView/HomeView";
import FilmDetailView from "./pages/filmDetailView/FilmDetailView";
import "./App.scss";

// function App() {
//   return (
//     <BrowserRouter>
//      <Navbar />
//       <Routes>
//         <Route path="/" element={<SearchView />} />
//         <Route path="search" element={<Users />}>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>

//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/search" element={<SearchView />} />
            <Route path="/film/:id" element={<FilmDetailView />} />
          </Routes>
        </div>
      </BrowserRouter>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
