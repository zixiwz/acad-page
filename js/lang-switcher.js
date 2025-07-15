function setLanguageVisibility(currentLanguage) {
    var selector = `.${currentLanguage}-version`;
    const visibleElements = document.querySelectorAll(selector);
    visibleElements.forEach((div) => {
        div.classList.remove("hide");
    });
    // showToast(`修改了 ${visibleElements.length} 个 ${currentLanguage}-version 元素为显示状态`);

    selector = `.${currentLanguage === "en" ? "cn" : "en"}-version`;
    const hiddenElements = document.querySelectorAll(selector);
    hiddenElements.forEach((div) => {
        div.classList.add("hide");
    });
    // showToast(`修改了 ${hiddenElements.length} 个 ${currentLanguage === "en" ? "cn" : "en"}-version 元素为隐藏状态`);
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

// document.addEventListener("DOMContentLoaded", function () {
//     setLanguageVisibility(document.documentElement.lang);
// });