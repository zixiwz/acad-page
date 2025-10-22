// 动态加载JavaScript文件的示例实现
(function() {
    'use strict';
    
    // 需要加载的JS文件列表
    const jsFiles = [
        'js/toast.js',
        'js/load-nav.js', 
        'js/lang-switcher.js'
    ];
    
    // 页面特定的JS文件
    const pageSpecificJS = {
        'publications': 'publications/publications.js',
        'links': 'links/links.js'
    };
    
    // 动态加载JS文件
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    
    // 检测当前页面类型和路径前缀
    function getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('publications')) return 'publications';
        if (path.includes('links')) return 'links';
        if (path.includes('cv')) return 'cv';
        if (path.includes('post')) return 'post';
        return 'home';
    }
    
    // 获取路径前缀（用于二级页面）
    function getPathPrefix() {
        const path = window.location.pathname;
        // 如果路径包含二级目录，需要添加 ../
        if (path.includes('/publications/') || 
            path.includes('/links/') || 
            path.includes('/cv/') || 
            path.includes('/post/')) {
            return '../';
        }
        return '';
    }
    
    // 加载所有必要的JS文件
    async function loadAllScripts() {
        try {
            const pathPrefix = getPathPrefix();
            
            // 并行加载核心JS文件（添加路径前缀）
            const corePromises = jsFiles.map(file => loadScript(pathPrefix + file));
            await Promise.all(corePromises);
            console.log('加载地址:', pathPrefix + jsFiles);
            
            // 加载页面特定的JS文件
            const currentPage = getCurrentPage();
            if (pageSpecificJS[currentPage]) {
                await loadScript(pathPrefix + pageSpecificJS[currentPage]);
            }
            
            console.log('所有JavaScript文件加载完成');
        } catch (error) {
            console.error('JavaScript文件加载失败:', error);
        }
    }
    
    // 页面加载完成后开始加载JS
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAllScripts);
    } else {
        loadAllScripts();
    }
})();