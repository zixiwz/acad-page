/* insert-nav.js */
(function insertNav() {
  const PLACEHOLDER_ID = 'nav-placeholder';

  // 1. Ensure the placeholder exists (create one if author forgot)
  let placeholder = document.getElementById(PLACEHOLDER_ID);
  if (!placeholder) {
    placeholder = document.createElement('div');
    placeholder.id = PLACEHOLDER_ID;
    // put it at the very beginning of <body>
    document.body.prepend(placeholder);
  }

  // 2. Fetch the external nav HTML
  fetch('/component/nav.html')
    .then(resp => {
      if (!resp.ok) throw new Error('Network response was not ok');
      return resp.text();
    })
    .then(html => {
      // 3. Inject markup
      placeholder.innerHTML = html;

      /* 4. Make any inline <script> inside nav.html actually run
         (they won’t execute when inserted as innerHTML)           */
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
    })
    .catch(err => console.error('Nav 加载失败:', err));
})();


function toggleMenu() {
	const navLinks = document.querySelector(".nav-links");
	navLinks.classList.toggle("active");
}