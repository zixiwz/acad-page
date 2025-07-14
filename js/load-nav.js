(function insertNav() {
    fetch('/component/nav.html')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(html => {
        document.getElementById('nav-placeholder').innerHTML = html;
  
        /* 如果 nav.html 里还有 <script>，最好在这里手动执行或改成外链脚本
           否则 <script> 不会自动运行。例如：
           const scripts = document.querySelector('#nav-placeholder').querySelectorAll("script");
           scripts.forEach(old => {
             const s = document.createElement("script");
             s.textContent = old.textContent; document.body.appendChild(s);
           });
        */
      })
      .catch(err => console.error('Nav 加载失败:', err));
  })();