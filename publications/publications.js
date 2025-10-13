function addEventListenerToPublications() {
	// console.log('加载publications.html');
	const listItems = document.querySelectorAll("ol li");
	// console.log(listItems);
	listItems.forEach(function (listItem) {
		listItem.addEventListener('click', function () {
			const title = this.querySelector('p strong').textContent;
			navigator.clipboard.writeText(title)
				.then(() => {
					console.log('标题已复制到剪贴板: ', title);
				})
				.catch((err) => {
					console.error('复制标题失败: ', err);
				});
		});
	});
}

addEventListenerToPublications();