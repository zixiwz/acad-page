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
		cv: "/assets/files/cv.pdf?v=5670b730",
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
			subtitle: "Software Engineering, M.Eng. student",
			period: "2025-Present",
			logo: "/assets/images/uestc-logo.svg"
		},
		{
			title: "Southwest Jiaotong University",
			subtitle: "Software Engineering, B.Eng.",
			period: "2021-2025",
			logo: "/assets/images/swjtu-logo.svg"
		}
	],
	selectedAwards: {
		primary: [
			"CCF 优秀大学生（全国 99 名）",
			"ACM 优秀大学生（校 2 名）",
			"四川国经奖学金（校 30 名）",
			"三好学生标兵（前 1%）",
			"全国大学生数学建模竞赛 国家一等奖 · 队长",
			"团队程序设计天梯赛（GPLT）国家一等奖 · 队内第一",
			"ACM 铜牌 × 3"
		],
		more: [
			"ICPC 国际大学生程序设计竞赛沈阳站 铜奖",
			"ICPC 国际大学生程序设计竞赛西安站 铜奖",
			"ICPC 国际大学生程序设计竞赛南京站 铜奖 · 队长",
			"蓝桥杯全国总决赛 C/C++ 程序设计 国家三等奖",
			"累计 9 项国家级奖项：2 项一等奖、7 项三等奖",
			"另有省级及其他奖项：10 项一等奖、6 项二等奖、8 项三等奖"
		]
	},
	projects: [
		{
			title: "AiTeachMe",
			subtitle: "Data-driven AI learning system",
			description: "Built a personal learning workspace that connects material parsing, learning plans, knowledge documents and graphs, reading-assistant Q&A, diagnostic assessment, and learner profiling. The backend organizes workflows, LLM/RAG, vector retrieval, and local/cloud storage around Course-level boundaries.",
			links: [{ label: "Website", href: "https://aiteachme.cn/" }],
			tags: ["React", "FastAPI", "LangGraph"]
		},
		{
			title: "Idea2PaperLab",
			subtitle: "Research automation agent system",
			description: "Developed a research loop from idea refinement, literature expansion, dataset analysis, code generation and revision, experiment execution, and result analysis to LaTeX drafting and self-review. Designed project state, run history, tool invocation, evidence tracking, and the desktop workspace.",
			links: [{ label: "Website", href: "https://9fields.cn/idea2paperlab.html" }],
			tags: ["FastAPI", "Electron", "React"]
		},
		{
			title: "FluxHive",
			subtitle: "Edge-cloud GPU task scheduling platform",
			description: "Designed a three-part collaboration architecture across Agent, Control Server, and Web Client, supporting GPU-memory-aware scheduling, heartbeat registration, task dispatch, streaming logs, RBAC/auditing, and a real-time monitoring control plane.",
			links: [{ label: "Website", href: "https://fluxhive.cn/" }],
			tags: ["FastAPI", "WebSocket", "React"]
		},
		{
			title: "FlowLine",
			subtitle: "GPU resource manager and scheduler · 400 stars",
			description: "Built a GPU resource management and concurrent task scheduling tool with memory-aware scheduling, task queues, failure retry, and web monitoring.",
			links: [{ label: "GitHub", href: "https://github.com/Dramwig/FlowLine" }],
			tags: ["GPU scheduling", "Task queue", "Web monitoring"]
		}
	],
	selectedPublications: [
		{
			title: "Self-Training with Dynamic Weighting for Robust Gradual Domain Adaptation",
			image: "/assets/images/publications/stdw.png",
			icon: "fa-solid fa-layer-group",
			venue: "The Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS), 2025",
			highlight: "Studies robust gradual domain adaptation with a self-training strategy and dynamic weighting under continuously shifting domains.",
			links: [{ label: "arXiv", href: "https://arxiv.org/abs/2510.13864" }],
			tags: ["Gradual domain adaptation", "Self-training", "Dynamic weighting"]
		},
		{
			title: "Multi-Modal Gradual Domain Osmosis: Stepwise Dynamic Learning with Batch Matching for Gradual Domain Adaptation",
			icon: "fa-solid fa-diagram-project",
			venue: "The 33rd ACM International Conference on Multimedia (ACMMM), 2025",
			highlight: "Introduces a multimodal gradual adaptation framework with stepwise dynamic learning and batch matching.",
			links: [{ label: "Publisher", href: "https://dl.acm.org/doi/10.1145/3746027.3755817" }],
			tags: ["Multimodal learning", "Gradual domain adaptation", "Batch matching"]
		}
	],
	publications: {
		preprints: [
			{
				title: "SWAT: Sliding Window Adversarial Training for Gradual Domain Adaptation",
				authors: ["Zixi Wang", "Yubo Huang", "Wenwei Luo", "Tonglan Xie", "Mengmeng Jing", "Lin Zuo"],
				correspondingAuthors: ["Mengmeng Jing", "Lin Zuo"],
				links: [{ label: "arXiv", href: "https://arxiv.org/abs/2501.19155" }]
			}

		],
		journalArticles: [
			{
				title: "Improved Genetic Algorithm Based on Greedy and Simulated Annealing Ideas for Vascular Robot Ordering Strategy",
				authors: ["Zixi Wang", "Yubo Huang", "Xin Lai", "Changshuo Fan", "Peng Lu"],
				correspondingAuthors: ["Yubo Huang"],
				venue: "PLOS ONE, 20(2), 2025",
				links: [{ label: "Link", href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0306990" }]
			}
		],
		conferenceProceedings: [
			{
				title: "Self-Training with Dynamic Weighting for Robust Gradual Domain Adaptation",
				authors: ["Zixi Wang", "Yushe Cao", "Yubo Huang", "Jinzhu Wei", "Jingzehua Xu", "Shuai Zhang", "Xin Lai"],
				correspondingAuthors: ["Jinzhu Wei", "Jingzehua Xu"],
				venue: "The Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS), 2025",
				links: [{ label: "arXiv", href: "https://arxiv.org/abs/2510.13864" }]
			},
			{
				title: "Multi-Modal Gradual Domain Osmosis: Stepwise Dynamic Learning with Batch Matching for Gradual Domain Adaptation",
				authors: ["Zixi Wang", "Yubo Huang", "Jingzehua Xu", "Jinzhu Wei", "Shuai Zhang", "Xin Lai"],
				correspondingAuthors: ["Jingzehua Xu"],
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
				authors: ["Yubo Huang", "Xin Lai", "Zixi Wang", "Muyang Ye", "Yinmian Li", "Yi Li", "Fang Zhang", "Chenyang Luo"],
				correspondingAuthors: ["Yubo Huang", "Chenyang Luo"],
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
