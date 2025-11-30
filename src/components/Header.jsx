import { Link } from 'react-router-dom'
import ResponsiveNav from './ResponsiveNav'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>个人博客</h1>
        </Link>
        <ResponsiveNav />
      </div>
    </header>
  )
}

export default Header