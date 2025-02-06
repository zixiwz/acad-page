function showError(error) {
	document.getElementById("app").innerHTML = `
	<div class="error-message">
		<h2>⚠️ Loading Error</h2>
		<p>${error.message}</p>
		<button onclick="location.reload()">Retry</button>
	</div>
	`;
}

class App {
	constructor() {
		this.appContainer = document.getElementById("app");
		this._cachedPageIds = null;
		this.init();
	}

	async init() {
		try {
			await this.loadComponent("navbar");
			await this.loadPage();
			this.setupRouter();
		} catch (error) {
			showError(error);
		}
	}

	async loadComponent(name) {
		try {
			const response = await fetch(`/partials/${name}.html`);
			if (!response.ok) {
				throw new Error(`${response.status} ${response.statusText}`);
			}
			const html = await response.text();
			this.appContainer.insertAdjacentHTML("afterbegin", html);
		} catch (error) {
			console.error(`Component ${name} load failed:`, error);
			throw error;
		}
	}

	setupRouter() {
		window.addEventListener("hashchange", () => this.loadPage());
		window.addEventListener("load", () => this.loadPage());
	}

	async loadPage() {
		try {
			const pageId = this.getCurrentPageId();
			console.log("Loading page:", pageId);

			const response = await fetch(`/partials/${pageId}.html`);
			if (!response.ok) throw new Error(`Page not found: ${pageId}`);

			const pages = this.appContainer.querySelectorAll(".page,.error-message");
			pages.forEach((page) => page.remove());
			const html = await response.text();

			this.appContainer.insertAdjacentHTML("beforeend", html);
			setLanguageVisibility(document.documentElement.lang);
			this.updateNavState(pageId);
		} catch (error) {
			console.error("Page load error:", error);
			showError(error);
		}
	}

	getCurrentPageIds() {
		if (!this._cachedPageIds) {
			this._cachedPageIds = Array.from(
				document.querySelectorAll(".nav-link[href]")
			)
				.map((link) => {
					try {
						const url = new URL(link.href, window.location.href);
						return url.hash.substring(1);
					} catch {
						return "";
					}
				})
				.filter((hash) => hash);
		}
		return this._cachedPageIds;
	}

	getCurrentPageId() {
		const currentHash = window.location.hash.substring(1);
		const validPageIds = this.getCurrentPageIds();
		return validPageIds.includes(currentHash) ? currentHash : "home";
	}

	updateNavState(pageId) {
		document.querySelectorAll(".nav-link").forEach((link) => {
			const isActive = link.getAttribute("href") === `#${pageId}`;
			link.classList.toggle("active", isActive);
			link.setAttribute("aria-current", isActive ? "page" : null);
		});
		if (pageId === "links") {
			addEventListenerToLinks();
		}
	}
}

new App();

function addEventListenerToLinks() {
	const linkList = document.getElementsByClassName("link-item");
	const favicon = document.getElementById("favicon");
	const siteName = document.getElementById("site-name");
	const siteLink = document.getElementById("site-link");
	const webDisplay = document.getElementById("web-display");

	for (let i = 0; i < linkList.length; i++) {
		console.log(linkList[i].textContent);
		linkList[i].addEventListener("click", function (event) {
			favicon.src = event.target.dataset.avatar || "images/default-avatar.svg";
			siteName.textContent = event.target.textContent;
			siteLink.href = event.target.dataset.url;
			webDisplay.src = event.target.dataset.url || "#";
		});
	}
}

function setLanguageVisibility(currentLanguage) {
	var selector = `.${currentLanguage}-version`;
	document.querySelectorAll(selector).forEach((div) => {
		div.classList.remove("hide");
		div.classList.add("show");
	});
	selector = `.${currentLanguage === "en" ? "cn" : "en"}-version`;
	document.querySelectorAll(selector).forEach((div) => {
		div.classList.remove("show");
		div.classList.add("hide");
	});
}

function toggleLanguage() {
	document.documentElement.lang =
		document.documentElement.lang === "en" ? "cn" : "en";
	document.querySelectorAll(".en-label, .zh-label").forEach((div) => {
		div.classList.toggle("active");
	});
	setLanguageVisibility(document.documentElement.lang);
}

function toggleMenu() {
	const navLinks = document.querySelector(".nav-links");
	navLinks.classList.toggle("active");
}
