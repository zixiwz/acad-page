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
		const correspondingAuthors = new Set(item.correspondingAuthors || []);
		const authors = item.authors.map((author) => {
			const name = author === data.profile.name ? `<b>${author}</b>` : author;
			const correspondingIcon = correspondingAuthors.has(author)
				? ` ${renderEnvelopeIcon("Corresponding author")}`
				: "";
			return `${name}${correspondingIcon}`;
		}).join(", ");
		return `
			<li>
				<p>
					<strong>${item.title}</strong><br />
					${authors}${item.venue ? `<br /><em>${item.venue}</em>` : ""}${links}
				</p>
			</li>
		`;
	}

	function renderEnvelopeIcon(label) {
		return `
			<svg class="corresponding-author" viewBox="0 0 24 24" role="img" aria-label="${label}">
				<title>${label}</title>
				<path d="M4 6.5h16v11H4z"></path>
				<path d="m4.8 7.2 7.2 5.6 7.2-5.6"></path>
				<path d="m4.8 16.8 5.3-4.5"></path>
				<path d="m19.2 16.8-5.3-4.5"></path>
			</svg>
		`;
	}

	const sectionHtml = sections.map(([title, items]) => `
		<section class="content-card publication-section">
			<div class="section-header">
				<h2>${title}</h2>
			</div>
			<ol>
				${items.map(renderPublication).join("")}
			</ol>
		</section>
	`).join("");

	root.innerHTML = `${sectionHtml}
		<div class="publication-legend">
			${renderEnvelopeIcon("Corresponding author")}
			<span>Corresponding author</span>
		</div>`;
})();
