require('dotenv').config();
const axios = require('axios');
const gitapi = {
	getUser(username) {
		axios
			.get(`https://api.github.com/users/${username}`, {
				headers: { Authorization: `token ${process.env.GH_TOKEN}` },
			})
			.then((response) => console.log(response.data));
		//.then(function (res) {
		//	console.log(response.res.data.avatar_url);
		//	console.log(response.res.data.email);
		//})
		//.catch((error) => console.log(error));
	},
};

gitapi.getUser('kristincenters');
module.exports = gitapi;
