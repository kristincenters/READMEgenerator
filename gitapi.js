const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

inquirer
	.prompt([
		{
			type: 'input',
			message: 'What is your user name?',
			name: 'username',
		},
	])
	.then(function ({ username }) {
		const queryUrl = `https://api.github.com/users/${username}/repos?per_page=20`;

		axios.get(queryUrl).then(function (res) {
			const repoNames = res.data.map(function (repo) {
				return repo.name;
			});

			const repoNamesStr = repoNames.join('\n');

			fs.writeFile('repos.txt', repoNamesStr, function (err) {
				if (err) {
					throw err;
				}

				console.log(`Saved ${repoNames.length} repos`);
			});
		});
	});
