(function insertNav() {
	const placeholderId = "nav-placeholder";
	const data = window.SITE_DATA || {};

	let placeholder = document.getElementById(placeholderId);
	if (!placeholder) {
		placeholder = document.createElement("div");
		placeholder.id = placeholderId;
		document.body.prepend(placeholder);
	}

	const brand = data.profile?.displayName || "Home";
	const links = data.navigation || [];

	placeholder.innerHTML = `<nav class="navbar">
		<svg id="menu-icon" viewBox="0 0 1024 1024" onclick="toggleMenu()">
			<path d="M905.2 144.9h-785c-31.3 0-56.7 25.6-56.7 57.3v7.7c0 31.6 25.4 36.4 56.7 36.4h785c31.3 0 56.7-4.7 56.7-36.4v-7.7c0-31.7-25.4-57.3-56.7-57.3zM800.7 459.8H120.2c-31.3 0-56.7 25.6-56.7 57.3v-13.2c0 31.6 25.4 57.3 56.7 57.3h680.5c31.3 0 56.7-25.6 56.7-57.3v13.2c0-31.6-25.4-57.3-56.7-57.3z m-104.4 315h-576c-31.3 0-56.7 25.6-56.7 57.3v7.7c0 31.6 25.4 36.4 56.7 36.4h576c31.3 0 56.7-4.7 56.7-36.4V832c0-31.6-25.4-57.2-56.7-57.2z" fill="#currentColor"></path>
		</svg>
		<a href="/" class="nav-brand">${brand}</a>
		<div class="nav-links">
			${links.map((link) => `<a href="${link.href}" class="nav-link">${link.label}</a>`).join("")}
		</div>
	</nav>`;
})();

function toggleMenu() {
	const navLinks = document.querySelector(".nav-links");
	navLinks?.classList.toggle("active");
}
