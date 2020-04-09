require('dotenv').config();
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const axios = require('axios');
//const getapi = require('./gitapi.js');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
	return inquirer
		.prompt([
			{
				type: 'input',
				name: 'username',
				message: 'What is your GitHub User Name?',
			},
			{
				type: 'input',
				name: 'project',
				message: 'What is your name of your project?',
			},
			/*		{
			type: 'input',
			name: 'description',
			message: 'Describe your project?',
		},
		{
			type: 'input',
			name: 'install',
			message: 'What command is needed to install dependencies?',
		},
		{
			type: 'input',
			name: 'usage',
			message: 'What does the user need to know about using this app?',
		},
		{
			type: 'checkbox',
			message: 'License types?',
			name: 'license',
			choices: ['MIT', 'Creative Commons', 'GNU'],
		},
		{
			type: 'input',
			name: 'contribute',
			message: 'How can the user contribute to this project?',
		},
		{
			type: 'input',
			name: 'test',
			message: 'How can the user test this application',
		},*/
		])
		.then(function (user) {
			//console.log(user);
			const username = user.username;

			axios
				.get(`https://api.github.com/users/${username}`, {
					headers: { Authorization: `token ${process.env.GH_TOKEN}` },
				})

				.then((user) => {
					console.log(user.data.avatar_url);
					console.log(user.data.email);
				})
				.catch(function (err) {
					console.log(err);
				});
		});
}
function generateREADME(response) {
	const project = response.project;
	response.description;
	return `
## Project 
${response.project}

## Description 
${response.description}
        
## Table of Contents: 

## Contact `;
}

async function init() {
	try {
		const response = await promptUser();

		const readme = generateREADME(response);

		await writeFileAsync('newREADME.md', readme);

		console.log('Successfully wrote readme');
	} catch (err) {
		console.log(err);
	}
}
init();
