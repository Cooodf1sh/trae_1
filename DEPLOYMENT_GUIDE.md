# 个人博客部署指南

本文档将帮助您将个人博客部署到公共服务器，生成可供他人访问的链接。

## 构建产物

项目已成功构建，所有静态文件位于 `dist` 目录中。这些文件包括：
- HTML、CSS 和 JavaScript 文件
- 所有必要的依赖和资源

## 推荐的托管服务

以下是几个适合部署React静态网站的托管服务，它们都提供免费选项和简单的部署流程：

### 1. GitHub Pages

**优点**：完全免费，与GitHub集成良好，适合开源项目

**部署步骤**：
1. 在GitHub上创建一个新的仓库
2. 将项目推送到GitHub仓库
3. 在仓库设置中启用GitHub Pages，选择 `gh-pages` 分支或 `main` 分支的 `/dist` 文件夹
4. 等待部署完成后，您将获得一个 `https://yourusername.github.io/repositoryname/` 的链接

### 2. Vercel

**优点**：免费计划慷慨，自动部署，自定义域名支持，全球CDN

**部署步骤**：
1. 访问 [Vercel](https://vercel.com) 并注册账号
2. 点击 "New Project"，选择从GitHub导入
3. 连接您的GitHub仓库
4. 配置项目：
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. 点击 "Deploy"，完成后您将获得一个类似 `projectname.vercel.app` 的链接

### 3. Netlify

**优点**：免费计划，自动部署，表单功能，自定义域名

**部署步骤**：
1. 访问 [Netlify](https://www.netlify.com) 并注册账号
2. 点击 "Add new site" > "Import an existing project"
3. 连接您的GitHub仓库
4. 配置构建设置：
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. 点击 "Deploy site"，完成后您将获得一个随机生成的 `.netlify.app` 域名

### 4. 手动部署（使用任意Web服务器）

如果您有自己的服务器或虚拟主机：

1. 将 `dist` 目录中的所有文件上传到您的服务器的Web根目录
2. 确保您的服务器已配置为处理单页应用（SPA）路由
   - 对于Nginx，添加配置：
     ```
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```
   - 对于Apache，启用 `mod_rewrite` 并添加 `.htaccess` 文件：
     ```
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```

## 部署注意事项

1. **路由配置**：如果您的应用使用React Router，确保服务器配置正确，将所有未知路径重定向到 `index.html`

2. **环境变量**：如果您的应用使用环境变量，确保在部署环境中正确设置

3. **自定义域名**：大多数托管服务都支持自定义域名，您可以将自己的域名指向部署的应用

4. **HTTPS**：确保启用HTTPS，大多数托管服务默认提供免费的SSL证书

## 自动部署

所有推荐的托管服务都支持与GitHub的集成，使您可以实现自动部署：
- 每当您推送到GitHub仓库时，托管服务会自动重新构建和部署您的应用
- 这使得更新内容变得非常简单，无需手动上传文件

## 查看部署状态

部署完成后，您可以通过以下方式确认部署是否成功：
1. 访问提供的URL链接
2. 检查页面是否正常加载
3. 测试导航和所有功能是否正常工作

祝您部署顺利！