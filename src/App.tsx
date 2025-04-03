import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import BlogEditor from './components/BlogEditor';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<BlogList />} />
        <Route path='/create' element={<BlogEditor />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/edit/:id' element={<BlogEditor />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
