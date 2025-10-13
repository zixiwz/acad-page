/* --------- tiny sanitizer: escape HTML & whitelist URL protocols --------- */
function escapeHTML(s){
    return s.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function safeUrl(url){
    try{
        const u = new URL(url, location.href);
        const allowed = ['http:','https:','data:','mailto:'];
        return allowed.includes(u.protocol) ? u.href : '#';
    }catch{ return '#'; }
}

/* --------- minimal markdown parser (state machine + a few regex) --------- */
function parseMarkdown(md){
    // Normalize line endings
    md = md.replace(/\r\n?/g, '\n');

    const lines = md.split('\n');
    let html = '';
    let inCode = false, codeLang = '', codeBuf = [];
    let inUL = false, inOL = false, inBlockquote = false;

    const flushCode = () => {
        if(!inCode) return;
        const codeEsc = escapeHTML(codeBuf.join('\n'));
        html += `<pre><code${codeLang ? ` data-lang="${escapeHTML(codeLang)}"`:''}>${codeEsc}</code></pre>\n`;
        inCode = false; codeLang=''; codeBuf=[];
    };
    const endLists = () => {
        if(inUL){ html += '</ul>\n'; inUL=false; }
        if(inOL){ html += '</ol>\n'; inOL=false; }
    };
    const endBlockquote = () => {
        if(inBlockquote){ html += '</blockquote>\n'; inBlockquote=false; }
    };

    // Helper: inline formatting (order matters)
    function inlineFormat(s){
        s = escapeHTML(s);
        // images ![alt](url)
        s = s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_,alt,href)=>`<img alt="${alt}" src="${safeUrl(href.trim())}">`);
        // links [text](url)
        s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_,txt,href)=>`<a href="${safeUrl(href.trim())}" target="_blank" rel="noopener noreferrer">${txt}</a>`);
        // strong **text** or __text__
        s = s.replace(/(\*\*|__)(.+?)\1/g, '<strong>$2</strong>');
        // em *text* or _text_
        s = s.replace(/(\*|_)([^*_].*?)\1/g, '<em>$2</em>');
        // inline code `code`
        s = s.replace(/`([^`]+)`/g, (_,code)=>`<code>${code}</code>`);
        return s;
    }

    for(let i=0;i<lines.length;i++){
        let line = lines[i];

        // Fenced code block ```
        const fence = line.match(/^```(\s*\w+)?\s*$/);
        if(fence){
            if(inCode){ // closing
                flushCode();
            }else{
                endLists(); endBlockquote();
                inCode = true;
                codeLang = (fence[1]||'').trim();
            }
            continue;
        }
        if(inCode){
            codeBuf.push(line);
            continue;
        }

        // Horizontal rule
        if(/^\s*(\*\s*\*\s*\*|-{3,}|_{3,})\s*$/.test(line)){
            endLists(); endBlockquote();
            html += '<hr/>\n';
            continue;
        }

        // Headings: # ... ######
        const h = line.match(/^(#{1,6})\s+(.+)$/);
        if(h){
            endLists(); endBlockquote();
            const level = h[1].length;
            const text = inlineFormat(h[2].trim());
            html += `<h${level}>${text}</h${level}>\n`;
            continue;
        }

        // Blockquote
        if(/^>\s?/.test(line)){
            endLists();
            if(!inBlockquote){ html += '<blockquote>\n'; inBlockquote = true; }
            line = line.replace(/^>\s?/, '');
            html += `<p>${inlineFormat(line)}</p>\n`;
            continue;
        }else{
            endBlockquote();
        }

        // Lists
        const ul = line.match(/^\s*[-+*]\s+(.+)$/);
        const ol = line.match(/^\s*(\d+)\.\s+(.+)$/);

        if(ul){
            if(!inUL){ endLists(); html += '<ul>\n'; inUL = true; }
            html += `<li>${inlineFormat(ul[1])}</li>\n`;
            continue;
        }else if(ol){
            if(!inOL){ endLists(); html += '<ol>\n'; inOL = true; }
            html += `<li>${inlineFormat(ol[2])}</li>\n`;
            continue;
        }else{
            endLists();
        }

        // Blank line => paragraph break
        if(/^\s*$/.test(line)){
            html += '\n';
            continue;
        }

        // Paragraph
        html += `<p>${inlineFormat(line)}</p>\n`;
    }

    flushCode(); endLists(); endBlockquote();
    return html.trim();
}

/* --------- load .md and render --------- */
async function loadAndRender(){
    // 从 URL 路径或查询参数中获取文件名
    let mdFile = 'post.md'; // 默认文件
    
    // 首先尝试从 URL 路径中提取文件名
    const pathParts = location.pathname.split('/').filter(part => part);
    if (pathParts.length > 0) {
        const lastPart = pathParts[pathParts.length - 1];
        // 如果路径最后一部分不是 'viewer'、'docs' 或任何 .html 文件，则认为是文件名
        if (lastPart !== 'viewer' && lastPart !== 'docs' && !lastPart.endsWith('.html')) {
            mdFile = lastPart + '.md';
        }
    }
    
    // 如果 URL 路径中没有找到文件名，则从查询参数中获取
    if (mdFile === 'post.md') {
        const params = new URLSearchParams(location.search);
        const paramFile = params.get('md');
        if (paramFile) {
            mdFile = paramFile;
        }
    }
    
    const titleEl = document.getElementById('title');
    const metaEl    = document.getElementById('meta');
    const content = document.getElementById('content');

    titleEl.textContent = mdFile.replace(/^.*\//,'').replace(/\.md$/, '');
    metaEl.textContent    = 'Source: ' + mdFile;

    try{
        // 首先尝试直接加载本地文件
        let resp = await fetch(mdFile, {cache:'no-cache'});
        
        // 如果本地文件加载失败，尝试使用GitHub Raw API
        if (!resp.ok) {
            // 构建GitHub Raw URL
            const repoPath = 'zixiwz/acad-page'
            const rawUrl = `https://raw.githubusercontent.com/${repoPath}/main/post/${mdFile}`;
            
            resp = await fetch(rawUrl, {cache:'no-cache'});
            if (!resp.ok) throw new Error(`HTTP ${resp.status} - 本地和GitHub Raw都无法访问`);
        }
        
        const text = await resp.text();
        const html = parseMarkdown(text);
        content.innerHTML = html || '<p><em>(empty file)</em></p>';
    }catch(err){
        content.innerHTML = `<div class="error">无法加载 <strong>${mdFile}</strong>：${escapeHTML(err.message)}</div>`;
    }
}
loadAndRender();