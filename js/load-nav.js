/* insert-nav.js */
(function insertNav() {
    const PLACEHOLDER_ID = 'nav-placeholder';

    let placeholder = document.getElementById(PLACEHOLDER_ID);
    if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.id = PLACEHOLDER_ID;
        // put it at the very beginning of <body>
        document.body.prepend(placeholder);
    }

    const basePath = '/';
    
    placeholder.innerHTML = `<nav class="navbar">
    <!-- <img id="menu-icon" src="images/memu.svg" alt="menu" onclick="toggleMenu()"> -->
    <svg id="menu-icon" viewBox="0 0 1024 1024" onclick="toggleMenu()">
        <path d="M905.2 144.9h-785c-31.3 0-56.7 25.6-56.7 57.3v7.7c0 31.6 25.4 36.4 56.7 36.4h785c31.3 0 56.7-4.7 56.7-36.4v-7.7c0-31.7-25.4-57.3-56.7-57.3zM800.7 459.8H120.2c-31.3 0-56.7 25.6-56.7 57.3v-13.2c0 31.6 25.4 57.3 56.7 57.3h680.5c31.3 0 56.7-25.6 56.7-57.3v13.2c0-31.6-25.4-57.3-56.7-57.3z m-104.4 315h-576c-31.3 0-56.7 25.6-56.7 57.3v7.7c0 31.6 25.4 36.4 56.7 36.4h576c31.3 0 56.7-4.7 56.7-36.4V832c0-31.6-25.4-57.2-56.7-57.2z" fill="#currentColor">
        </path>
    </svg>
    <div class="nav-links">
        <a href="${basePath}"                class="nav-link">Home</a>
        <a href="${basePath}publications/"   class="nav-link">Publications</a>
        <a href="${basePath}links/"          class="nav-link">Links</a>
        <a href="${basePath}cv/"             class="nav-link">CV</a>
    </div>

    <div class="lang-switcher" id="lang-switcher" onclick="toggleLanguage()">
        <span class="en-label active">EN</span>
        /
        <span class="zh-label">CN</span>
    </div>
    <div class="lang-switcher" id="lang-switcher-mini" onclick="toggleLanguage()">
        <span class="en-label en-version active ">EN</span>
        <span class="zh-label cn-version hide">CN</span>
    </div>
</nav>`

    const inlineScripts = placeholder.querySelectorAll('script');
    inlineScripts.forEach(oldScript => {
        const newScript = document.createElement('script');

        // copy attributes such as src, type, etc.
        Array.from(oldScript.attributes).forEach(attr =>
            newScript.setAttribute(attr.name, attr.value)
        );

        newScript.textContent = oldScript.textContent;
        oldScript.replaceWith(newScript);
    });

})();


function toggleMenu() {
	const navLinks = document.querySelector(".nav-links");
	navLinks.classList.toggle("active");
}
