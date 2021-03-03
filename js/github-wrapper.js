const githubapi = {
	getUserPublicRepositories: async (username) => {
		return JSON.parse(await webRequest('get', `https://api.github.com/users/${username}`));
	},
	getUserRepositories: async (username) => {
		return JSON.parse(await webRequest('get', `https://api.github.com/users/${username}/repos`));
	}
}