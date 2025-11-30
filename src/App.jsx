import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2023 个人博客 | 版权所有</p>
        </footer>
      </div>
      <BackToTop />
    </>
  )
}

export default App