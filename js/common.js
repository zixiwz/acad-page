function loadCSS(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}

// 动态加载JavaScript文件
function loadJS(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// loadCSS("/css/colors.css");
// loadCSS("/css/base.css");

// 根据当前页面路径自动加载相应的JS文件
function autoLoadPageScripts() {
    const currentPath = window.location.pathname;
    const basePath = currentPath.includes('/') ? currentPath.substring(0, currentPath.lastIndexOf('/')) : '';
    
    // 所有页面都需要的基础脚本
    const baseScriptsPath = [
        '/js/toast.js',
        '/js/load-nav.js', 
        '/js/lang-switcher.js'
    ];
    
    // 并行加载所有脚本
    Promise.all(baseScriptsPath.map(src => loadJS(src)))
        .catch(err => {
            console.error('加载脚本失败:', err);
        });
}

// 页面加载完成后自动执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoLoadPageScripts);
} else {
    autoLoadPageScripts();
}