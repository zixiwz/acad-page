window.SITE_DATA = {
	repository: "zixiwz/acad-page",
	profile: {
		name: "Zixi Wang",
		displayName: "Zixi Wang",
		role: "Graduate Student · Software Engineering",
		lead: "MS student, School of Information and Software Engineering",
		affiliation: "University of Electronic Science and Technology of China",
		bio: "I am interested in machine learning, gradual domain adaptation, and robust visual perception. My recent work explores how to transfer knowledge across continuously changing domains with stable training strategies.",
		avatar: "/assets/images/avatar.jpg",
		cv: "/assets/files/cv.pdf",
		links: [
			{ label: "Email", href: "mailto:zixi-wang@outlook.com", icon: "fa-solid fa-envelope" },
			{ label: "Blog", href: "https://blog.wangzixi.top", icon: "fa fa-blog" },
			{ label: "GitHub", href: "https://github.com/dramwig", icon: "fa-brands fa-github" },
			{ label: "ORCID", href: "https://orcid.org/0009-0009-4979-4562", icon: "fa-brands fa-orcid" },
			{ label: "Zhihu", href: "https://www.zhihu.com/people/feng-qing-51-31", icon: "fa-brands fa-zhihu" },
			{ label: "OpenReview", href: "https://openreview.net/profile?id=~Zixi_Wang2", icon: "fa fa-book-reader" },
			{ label: "Google Scholar", href: "https://scholar.google.com/citations?user=KL1uqx4AAAAJ", icon: "fa fa-graduation-cap" }
		]
	},
	navigation: [
		{ label: "Home", href: "/" },
		{ label: "Publications", href: "/publications/" },
		{ label: "CV", href: "/cv/" }
	],
	educationExperience: [
		{
			title: "University of Electronic Science and Technology of China",
			subtitle: "Master of Engineering in Software Engineering",
			period: "2025.09 - Present"
		},
		{
			title: "Southwest Jiaotong University",
			subtitle: "Bachelor of Engineering in Software Engineering",
			period: "2021.09 - 2025.06"
		}
	],
	projects: [
		{
			title: "SWAT",
			description: "Sliding window adversarial training for gradual domain adaptation with flow-matching bridges.",
			links: [{ label: "arXiv", href: "https://arxiv.org/abs/2501.19155" }],
			tags: ["Domain adaptation", "Adversarial training"]
		},
		{
			title: "GDO",
			description: "Self-training with dynamic weighting for robust gradual domain adaptation under distribution shift.",
			links: [{ label: "arXiv", href: "https://arxiv.org/abs/2510.13864" }],
			tags: ["Self-training", "Dynamic weighting"]
		}
	],
	selectedPublications: [
		{
			title: "RD-Crack: A Study of Concrete Crack Detection Guided by a Residual Neural Network Improved Based on Diffusion Modeling",
			icon: "fa-solid fa-microscope",
			venue: "International Conference on Artificial Neural Networks (ICANN), 2024",
			links: [{ label: "Publisher", href: "https://link.springer.com/chapter/10.1007/978-3-031-72356-8_23" }],
			tags: ["Crack detection", "Residual neural network", "Diffusion modeling"]
		}
	],
	publications: {
		preprints: [
			{
				title: "SWAT: Sliding Window Adversarial Training for Gradual Domain Adaptation",
				authors: ["Zixi Wang", "Yubo Huang", "Wenwei Luo", "Tonglan Xie", "Mengmeng Jing*", "Lin Zuo*"],
				links: [{ label: "arXiv", href: "https://arxiv.org/abs/2501.19155" }]
			}

		],
		journalArticles: [
			{
				title: "Improved Genetic Algorithm Based on Greedy and Simulated Annealing Ideas for Vascular Robot Ordering Strategy",
				authors: ["Zixi Wang", "Yubo Huang*", "Xin Lai", "Changshuo Fan", "Peng Lu"],
				venue: "PLOS ONE, 20(2), 2025",
				links: [{ label: "Link", href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0306990" }]
			}
		],
		conferenceProceedings: [
			{
				title: "Self-Training with Dynamic Weighting for Robust Gradual Domain Adaptation",
				authors: ["Zixi Wang", "Yushe Cao", "Yubo Huang", "Jinzhu Wei*", "Jingzehua Xu*", "Shuai Zhang", "Xin Lai"],
				venue: "The Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS), 2025",
				links: [{ label: "arXiv", href: "https://arxiv.org/abs/2510.13864" }]
			},
			{
				title: "Multi-Modal Gradual Domain Osmosis: Stepwise Dynamic Learning with Batch Matching for Gradual Domain Adaptation",
				authors: ["Zixi Wang", "Yubo Huang", "Jingzehua Xu*", "Jinzhu Wei", "Shuai Zhang", "Xin Lai"],
				venue: "The 33rd ACM International Conference on Multimedia (ACMMM), 2025",
				links: [{ label: "Link", href: "https://dl.acm.org/doi/10.1145/3746027.3755817" }]
			},
			{
				title: "LHQ-SVC: Lightweight and High Quality Singing Voice Conversion Modeling",
				authors: ["Yubo Huang", "Xin Lai", "Muyang Ye", "Anran Zhu", "Zixi Wang", "Jingzehua Xu", "Shuai Zhang", "Zhiyuan Zhou", "Weijie Niu"],
				venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025",
				links: [{ label: "Link", href: "https://ieeexplore.ieee.org/abstract/document/10889687" }]
			},
			{
				title: "RD-Crack: A Study of Concrete Crack Detection Guided by a Residual Neural Network Improved Based on Diffusion Modeling",
				authors: ["Yubo Huang*", "Xin Lai", "Zixi Wang", "Muyang Ye", "Yinmian Li", "Yi Li", "Fang Zhang", "Chenyang Luo*"],
				venue: "International Conference on Artificial Neural Networks (ICANN), 2024",
				links: [{ label: "Link", href: "https://link.springer.com/chapter/10.1007/978-3-031-72356-8_23" }]
			}
		]
	},
	footer: {
		year: "2025",
		owner: "Zixi Wang",
		icp: "蜀ICP备2025125007号-1",
		icpUrl: "https://beian.miit.gov.cn/",
		police: "川公网安备51012402001433号",
		policeUrl: "https://beian.mps.gov.cn/#/query/webSearch?code=51012402001433"
	}
};
