const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

(async () => {
	const page_requests = await Promise.all([githubapi.getUserRepositories('armored-dragon'), githubapi.getUserPublicRepositories('armored-dragon')]);
	const owner = { repositories: page_requests[0], profile: page_requests[1] };
	// const pinned_repositories = ['260648901', '315174611'];	// These are repositories that have first dibs on the webpage.

	qs('#owner-pfp').src = owner.profile.avatar_url;
	qs('#owner-name').innerText = owner.profile.name;
	qs('#owner-repo-count').innerText = owner.profile.public_repos;
	qs('#owner-follower-count').innerText = owner.profile.followers;

})();



function webRequest(type, url) {
	return new Promise((resolve, reject) => {
		let newXHR = new XMLHttpRequest() || new window.ActiveXObject('Microsoft.XMLHTTP');
		newXHR.open(type, url, true);
		newXHR.send();
		newXHR.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) return resolve(this.response);
				else return reject({ error: this.status });
			}
		};
	});
}