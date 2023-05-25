import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksList from "./components/BooksList";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/books" element={<BooksList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
