// 模拟博客文章数据
export const posts = [
  {
    id: 1,
    title: "React Hooks 详解与实战应用",
    date: "2023-06-15",
    category: "前端开发",
    tags: ["React", "Hooks", "JavaScript"],
    excerpt: "React Hooks 是 React 16.8 引入的新特性，它允许你在不编写 class 的情况下使用 state 以及其他的 React 特性。本文将详细介绍常用的 Hooks 以及实际应用场景。",
    content: "# React Hooks 详解与实战应用\n\nReact Hooks 是 React 16.8 引入的新特性，它允许你在不编写 class 的情况下使用 state 以及其他的 React 特性。\n\n## 什么是 Hooks？\nHooks 是一些可以让你在函数组件里\"钩入\" React state 及生命周期等特性的函数。\n\n## 常用的 Hooks\n\n### useState\nuseState 是最基本的 Hook，它允许你在函数组件中添加状态。\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```"
  },
  {
    id: 2,
    title: "CSS Grid 布局完全指南",
    date: "2023-05-28",
    category: "前端开发",
    tags: ["CSS", "Grid", "布局"],
    excerpt: "CSS Grid 是一个强大的二维布局系统，它让我们能够以网格的形式排列元素，轻松创建复杂的布局。本文将从基础到高级，全面介绍 CSS Grid 的使用方法。",
    content: "# CSS Grid 布局完全指南\n\nCSS Grid 是一个强大的二维布局系统，它让我们能够以网格的形式排列元素，轻松创建复杂的布局。\n\n## 基础用法\n\n### 创建网格容器\n\n```css\n.container {\n  display: grid;\n}\n```\n\n### 定义网格轨道\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-template-rows: 50px 50px;\n}\n```"
  },
  {
    id: 3,
    title: "TypeScript 高级类型详解",
    date: "2023-04-10",
    category: "前端开发",
    tags: ["TypeScript", "类型系统", "进阶"],
    excerpt: "TypeScript 的类型系统非常强大，除了基本类型外，还有许多高级类型特性可以帮助我们编写更安全、更可维护的代码。本文将深入探讨 TypeScript 的高级类型。",
    content: "# TypeScript 高级类型详解\n\nTypeScript 的类型系统非常强大，除了基本类型外，还有许多高级类型特性可以帮助我们编写更安全、更可维护的代码。\n\n## 联合类型和交叉类型\n\n### 联合类型\n\n```typescript\ntype Status = 'pending' | 'success' | 'error';\n\nfunction handleStatus(status: Status) {\n  // 处理不同状态\n}\n```\n\n### 交叉类型\n\n```typescript\ninterface Person {\n  name: string;\n  age: number;\n}\n\ninterface Employee {\n  employeeId: string;\n  department: string;\n}\n\ntype EmployeePerson = Person & Employee;\n```"
  }
];