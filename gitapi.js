require('dotenv').config();
const axios = require('axios');
const gitapi = {
	getUser(username) {
		return axios.get(`https://api.github.com/users/${username}`, {
			headers: { Authorization: `token ${process.env.GH_TOKEN}` },
		});
		.then(function (res) {
		console.log(res.data.avatar_url);
		console.log(res.data.email);
		})
		.catch((error) => console.log(error));
	},
};
//gitapi.getUser('');
module.exports = gitapi;
