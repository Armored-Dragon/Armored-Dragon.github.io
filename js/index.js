const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

function decrypt(s) {
	return s.replace(/[A-Z]/gi, c =>
		"NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c)]);
}

qs('#em-link').innerText = decrypt('choyvpznvy@nezberqqentba.pbz');
qs('#em-link').href = `mailto:${decrypt('choyvpznvy@nezberqqentba.pbz')}`;