/* load-footer.js */
(function loadFooter() {
    const PLACEHOLDER_ID = 'footer-placeholder';

    let placeholder = document.getElementById(PLACEHOLDER_ID);
    if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.id = PLACEHOLDER_ID;
        // 将footer放在body的末尾
        document.body.appendChild(placeholder);
    }

    // 根据当前路径确定基础路径
    const currentPath = window.location.pathname;
    let basePath = '/';
    
    // 如果当前在子目录中，需要调整路径
    if (currentPath.includes('/links/') || currentPath.includes('/cv/') || 
        currentPath.includes('/post/') || currentPath.includes('/publications/')) {
        basePath = '../';
    }

    placeholder.innerHTML = `<footer>
        <p>&copy; 2025 Zixi Wang &nbsp;
            <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2025125007号-1</a> &nbsp;
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=51012402001433" rel="noreferrer" target="_blank">
                <!-- <img src="${basePath}images/beian.png" alt="备案图标" class="beian"> -->
                川公网安备51012402001433号
            </a>
        </p>
    </footer>`;

    // 处理内联脚本（如果有的话）
    const inlineScripts = placeholder.querySelectorAll('script');
    inlineScripts.forEach(oldScript => {
        const newScript = document.createElement('script');

        // 复制属性如src, type等
        Array.from(oldScript.attributes).forEach(attr =>
            newScript.setAttribute(attr.name, attr.value)
        );

        newScript.textContent = oldScript.textContent;
        oldScript.replaceWith(newScript);
    });

})();
