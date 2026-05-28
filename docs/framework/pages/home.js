(function renderHome() {
	const data = window.SITE_DATA;
	const root = document.getElementById("home-root");
	if (!data || !root) return;

	function externalAttrs(href) {
		return href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
	}

	function renderLinks(links) {
		return links.map((link) => `
			<a href="${link.href}"${externalAttrs(link.href)} title="${link.label}">
				<i class="${link.icon}"></i>${link.label}
			</a>
		`).join("");
	}

	function renderProfileLinks(links) {
		const primaryLabels = new Set(["Email", "GitHub", "Google Scholar", "CV"]);
		const primaryLinks = links.filter((link) => primaryLabels.has(link.label));
		const moreLinks = links.filter((link) => !primaryLabels.has(link.label));
		return `
			<div class="contact-links">
				${renderLinks(primaryLinks)}
				${moreLinks.length ? `
					<details class="contact-more">
						<summary title="More links" aria-label="More links">
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="m6 9 6 6 6-6"></path>
							</svg>
						</summary>
						<div class="contact-links contact-links-more">
							${renderLinks(moreLinks)}
						</div>
					</details>
				` : ""}
			</div>
		`;
	}

	function renderActionLinks(links = []) {
		return links.map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join("");
	}

	function renderTags(tags = []) {
		return tags.map((tag) => `<span>${tag}</span>`).join("");
	}

	function renderAwardChips(items = []) {
		return items.map((item) => `<span>${item}</span>`).join("");
	}

	function renderPaperList(items) {
		return items.map((item) => `
			<li>
				<div class="paper-thumb">
					${item.image
						? `<img src="${item.image}" alt="${item.title}" loading="lazy">`
						: `<i class="${item.icon}"></i>`
					}
				</div>
				<div class="paper-body">
					<h3>${item.title}</h3>
					${item.highlight ? `<p><strong>TL;DR:</strong> ${item.highlight}</p>` : ""}
					${item.venue ? `<p><em>${item.venue}</em></p>` : ""}
					<div class="actions">${renderActionLinks(item.links)}</div>
					<div class="tags">${renderTags(item.tags)}</div>
				</div>
			</li>
		`).join("");
	}

	function renderProjectCards(items) {
		return items.map((project) => `
			<li class="project-card">
				<h3>${project.title}</h3>
				<p>${project.description}</p>
				<div class="actions">${renderActionLinks(project.links)}</div>
			</li>
		`).join("");
	}

	const featuredProjects = data.projects.filter((project) => project.featured);
	const moreProjects = data.projects.filter((project) => !project.featured);

	root.innerHTML = `
		<section class="profile-card">
			<div class="profile-copy">
				<div class="info">
					<h1>${data.profile.displayName || data.profile.name}</h1>
					<p class="lead">${data.profile.lead}</p>
					<p class="affiliation">${data.profile.affiliation}</p>
					<p class="bio">${data.profile.bio}</p>
				</div>
				${renderProfileLinks(data.profile.links)}
			</div>
			<div class="portrait-wrap">
				<img src="${data.profile.avatar}" alt="${data.profile.name}" class="avatar" />
			</div>
		</section>

		<section class="content-card">
			<div class="section-header">
				<h2>Selected Publications</h2>
			</div>
			<ul class="paper-list">
				${renderPaperList(data.selectedPublications)}
			</ul>
		</section>

		<section class="content-card">
			<div class="section-header">
				<h2>Education & Experience</h2>
			</div>
			<ul class="timeline-list">
				${data.educationExperience.map((item) => `
					<li>
						<div class="timeline-logo">
							<img src="${item.logo}" alt="${item.title} logo" loading="lazy">
						</div>
						<div class="timeline-body">
							<span>${item.period}</span>
							<h3>${item.title}, ${item.subtitle}</h3>
						</div>
					</li>
				`).join("")}
			</ul>
		</section>

		<section class="content-card">
			<div class="section-header">
				<h2>Selected Awards</h2>
			</div>
			<div class="award-chips">
				${renderAwardChips(data.selectedAwards.primary)}
			</div>
			<details class="award-details">
				<summary>See more awards</summary>
				<div class="award-chips">
					${renderAwardChips(data.selectedAwards.more)}
				</div>
			</details>
		</section>

		<section class="content-card">
			<div class="section-header">
				<h2>Projects</h2>
			</div>
			<ul class="project-list">
				${renderProjectCards(featuredProjects)}
			</ul>
			${moreProjects.length ? `
				<details class="project-details">
					<summary>See more projects</summary>
					<ul class="project-list project-list-more">
						${renderProjectCards(moreProjects)}
					</ul>
				</details>
			` : ""}
		</section>
	`;
})();
