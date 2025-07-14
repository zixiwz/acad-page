// lang-switcher.js

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
	showToast("Language switched to " + document.documentElement.lang);
}

setLanguageVisibility(document.documentElement.lang);