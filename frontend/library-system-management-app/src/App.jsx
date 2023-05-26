import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Members from "./components/Member/Members";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksList from "./components/Book/BooksList";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/members" element={<Members />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
