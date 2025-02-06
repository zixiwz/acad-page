# Top-Page

本仓库旨在替换臃肿的 [academicpages](https://github.com/academicpages/academicpages.github.io) 项目，提供一个更加简洁、高效的解决方案。

## 主要功能

- **页面展示**：包含多个页面，如 `publications`、`links`、`research` 等，用于展示不同类型的信息。
- **组件加载**：通过异步加载组件的方式，实现页面的动态加载，提高用户体验。
- **语言切换**：支持中英文语言切换，方便不同语言用户的使用。

## 项目结构

- `top-page/css/`：存放 CSS 样式文件，用于定义页面的外观和布局。
- `top-page/partials/`：包含各个页面的 HTML 片段，通过组件加载的方式动态插入到主页面中。
- `top-page/js/`：存放 JavaScript 文件，负责处理页面的交互逻辑和动态加载。

## 测试工具

- [WebPageTest](https://www.webpagetest.org)：用于测试页面的加载速度和性能。
- [Pingdom](https://tools.pingdom.com)：提供网站性能监测和分析服务。
- [GTmetrix](https://gtmetrix.com/)：综合评估网站的性能和优化建议。

## 访问链接

- **主站**：<https://www.wangzixi.to>（CNAME 指向 GitHub）
- **GitHub 页面**：<https://dramwig.github.io/top-page/>
- **Netlify 页面**：<https://wangzixi.netlify.app/>（与 GitHub 同步）

## 如何使用

1. 克隆本仓库到本地：

   ```sh
   git clone <仓库地址>
   ```

2. 打开项目文件夹，根据自己的需求修改相关文件。
3. 部署到服务器或使用 GitHub Pages、Netlify 等平台进行部署。

## 技术栈

本项目使用纯 **HTML + CSS + JavaScript** 原生技术栈，不依赖任何第三方框架或库。这种设计确保了项目的**稳定性**和**访问速度**，同时减少了不必要的依赖。然而，这也意味着用户需要具备基本的 **HTML** 知识，以便能够自行修改和定制页面内容。

## 贡献

欢迎大家对本项目进行贡献，如果你发现了任何问题或有改进的建议，请随时提交 issue 或 pull request。

## 许可证

本项目采用 [MIT 许可证](https://opensource.org/licenses/MIT)，你可以自由地使用、修改和分发本项目。