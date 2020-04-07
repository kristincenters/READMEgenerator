require('dotenv').config();
const axios = require('axios');
//const inquirer = require('inquirer');

//inquirer.prompt([
//	{
//		type: 'input',
//		message: 'What is your user name?',
//		name: 'username',
//	},
//]);
const githubApi = {
	getUser(username) {
		axios
			.get(`https://api.github.com/users/${username}`, {
				headers: { Authorization: `token ${process.env.GH_TOKEN}` },
			})
			.then((response) => console.log(response.data))
			.catch((error) => console.log(error));
	},
};
githubApi.getUser('kristincenters');
module.exports = githubApi;
