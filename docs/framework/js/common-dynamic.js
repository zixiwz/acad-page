(function loadCommonScripts() {
	"use strict";

	const coreScripts = [
		"assets/data/site.js",
		"framework/js/toast.js",
		"framework/js/load-nav.js"
	];

	const pageScripts = {
		home: "framework/pages/home.js",
		publications: "framework/pages/publications.js"
	};

	const footerScript = "framework/js/load-footer.js";

	function getCurrentPage() {
		const path = window.location.pathname;
		if (path.includes("/publications/")) return "publications";
		if (path.includes("/cv/")) return "cv";
		return "home";
	}

	function getPathPrefix() {
		const path = window.location.pathname;
		if (
			path.includes("/publications/") ||
			path.includes("/cv/")
		) {
			return "../";
		}
		return "";
	}

	function loadScript(src) {
		return new Promise((resolve, reject) => {
			const script = document.createElement("script");
			script.src = src;
			script.onload = resolve;
			script.onerror = reject;
			document.head.appendChild(script);
		});
	}

	async function loadAllScripts() {
		try {
			const pathPrefix = getPathPrefix();
			for (const file of coreScripts) {
				await loadScript(pathPrefix + file);
			}

			const currentPage = getCurrentPage();
			if (pageScripts[currentPage]) {
				await loadScript(pathPrefix + pageScripts[currentPage]);
			}

			if (currentPage === "home") {
				await loadScript(pathPrefix + footerScript);
			}
		} catch (error) {
			console.error("Failed to load page scripts:", error);
		}
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", loadAllScripts);
	} else {
		loadAllScripts();
	}
})();
