(function renderPublications() {
	const data = window.SITE_DATA;
	const root = document.getElementById("publications-root");
	if (!data || !root) return;

	const sections = [
		["Conference Proceedings", data.publications.conferenceProceedings],
		["Journal Articles", data.publications.journalArticles],
		["Preprints", data.publications.preprints]
	];

	function renderPublication(item) {
		const links = (item.links || []).map((link) => ` [<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>]`).join("");
		const authors = item.authors.map((author) => author === data.profile.name ? `<b>${author}</b>` : author).join(", ");
		return `
			<li>
				<p>
					<strong>${item.title}</strong><br />
					${authors}${item.venue ? `<br /><em>${item.venue}</em>` : ""}${links}
				</p>
			</li>
		`;
	}

	root.innerHTML = sections.map(([title, items]) => `
		<section class="content-card publication-section">
			<div class="section-header">
				<h2>${title}</h2>
			</div>
			<ol>
				${items.map(renderPublication).join("")}
			</ol>
		</section>
	`).join("");
})();
