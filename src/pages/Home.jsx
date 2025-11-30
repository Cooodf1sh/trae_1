import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { posts } from '../data/mockData'

function Home() {
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    // 按照日期降序排列文章
    const sortedPosts = [...posts].sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    )
    setFilteredPosts(sortedPosts)
  }, [])

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h2>欢迎来到我的个人博客</h2>
          <p>分享技术、生活和思考</p>
        </div>
      </div>
      
      <div className="posts-container">
        <h3 className="section-title">最新文章</h3>
        <div className="posts-grid">
          {filteredPosts.length === 0 ? (
            <p className="no-posts">暂无文章</p>
          ) : (
            filteredPosts.map(post => (
              <article key={post.id} className="post-card">
                <div className="post-header">
                  <h2 className="post-title">
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </h2>
                  <div className="post-meta">
                    <span className="post-date">{new Date(post.date).toLocaleDateString('zh-CN')}</span>
                    <span className="post-category">{post.category}</span>
                  </div>
                </div>
                <div className="post-excerpt">
                  <p>{post.excerpt}</p>
                </div>
                <div className="post-footer">
                  <Link to={`/posts/${post.id}`} className="read-more">
                    阅读更多 →
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Home