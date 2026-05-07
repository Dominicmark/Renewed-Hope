import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Volunteer from './pages/Volunteer';
import Register from './pages/Register';
import Donate from './pages/Donate';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="register" element={<Register />} />
          <Route path="donate" element={<Donate />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<NewsArticle />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  );
}
