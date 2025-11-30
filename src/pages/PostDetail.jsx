import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom' // 注意：路由路径是 /posts/:id
import './PostDetail.css'
import { posts } from '../data/mockData'
import MarkdownRenderer from '../components/MarkdownRenderer'

function PostDetail() {
  const { id } = useParams() // 注意：路由路径是 /posts/:id
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // 模拟API请求
    setTimeout(() => {
      const foundPost = posts.find(p => p.id === parseInt(id))
      if (foundPost) {
        setPost(foundPost)
        setLoading(false)
      } else {
        setError('文章未找到')
        setLoading(false)
      }
    }, 300)
  }, [id])

  if (loading) {
    return (
      <div className="post-detail loading">
        <div className="loading-spinner">加载中...</div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="post-detail error">
        <p>{error || '加载文章时出错'}</p>
        <Link to="/" className="back-link">返回首页</Link>
      </div>
    )
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="post-detail">
      <button onClick={handleBack} className="back-button">← 返回</button>
      
      <article className="article">
        <header className="article-header">
          <h1 className="article-title">{post.title}</h1>
          <div className="article-meta">
            <span className="article-date">{new Date(post.date).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <span className="article-category">{post.category}</span>
          </div>
        </header>

        <div className="article-content">
          <MarkdownRenderer markdown={post.content} />
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </footer>
      </article>

      <div className="related-posts">
        <h3>相关文章</h3>
        <div className="related-posts-list">
          {posts
            .filter(p => p.id !== parseInt(id) && p.category === post.category)
            .slice(0, 3)
            .map(relatedPost => (
              <Link key={relatedPost.id} to={`/posts/${relatedPost.id}`} className="related-post">
                <h4>{relatedPost.title}</h4>
                <p>{relatedPost.excerpt}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PostDetail