function addEventListenerToLinks() {
	const linkList = document.getElementsByClassName("link-item");
	const favicon = document.getElementById("favicon");
	const siteName = document.getElementById("site-name");
	const siteLink = document.getElementById("site-link");
	const siteSent = document.getElementById("one-sentence");
	const webDisplay = document.getElementById("web-display");

	for (let i = 0; i < linkList.length; i++) {
		console.log(linkList[i].textContent);
		linkList[i].addEventListener("click", function (event) {
			favicon.src = event.target.dataset.avatar || "images/default-avatar.svg";
			siteName.textContent = event.target.textContent;
			siteLink.href = event.target.dataset.url;
			siteSent.textContent = event.target.dataset.sentence;
			webDisplay.src = event.target.dataset.url || "#";
		});
	}
}

addEventListenerToLinks();