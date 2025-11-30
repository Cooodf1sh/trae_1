import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h2 className="about-title">关于我</h2>
        <div className="about-content">
          <div className="about-intro">
            <p>你好！欢迎来到我的个人博客。我是一名热爱技术的开发者，热衷于分享我的学习心得和项目经验。</p>
            <p>这个博客主要用来记录我的技术学习、项目实践以及一些生活感悟。希望通过这个平台能够与更多志同道合的人交流，共同进步。</p>
          </div>
          
          <div className="about-skills">
            <h3>技术栈</h3>
            <ul className="skills-list">
              <li>前端：React, Vue, JavaScript, HTML, CSS</li>
              <li>后端：Node.js, Express, Python</li>
              <li>数据库：MySQL, MongoDB</li>
              <li>工具：Git, Webpack, Docker</li>
            </ul>
          </div>
          
          <div className="about-contact">
            <h3>联系方式</h3>
            <p>邮箱：example@example.com</p>
            <p>GitHub：<a href="#" target="_blank" rel="noopener noreferrer">github.com/username</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About