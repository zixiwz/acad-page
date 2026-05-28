(function loadFooter() {
	const placeholderId = "footer-placeholder";
	const footer = window.SITE_DATA?.footer;
	if (!footer) return;

	let placeholder = document.getElementById(placeholderId);
	if (!placeholder) {
		placeholder = document.createElement("div");
		placeholder.id = placeholderId;
		document.body.appendChild(placeholder);
	}

	placeholder.innerHTML = `<footer>
		<p>&copy; ${footer.year} ${footer.owner} &nbsp;
			<a href="${footer.icpUrl}" target="_blank" rel="noopener noreferrer">${footer.icp}</a> &nbsp;
			<a href="${footer.policeUrl}" target="_blank" rel="noopener noreferrer">${footer.police}</a>
		</p>
	</footer>`;
})();
