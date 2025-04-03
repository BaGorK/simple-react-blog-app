import { Route, Routes } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import BlogEditor from "./components/BlogEditor";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<BlogEditor />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/edit/:id" element={<BlogEditor />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
