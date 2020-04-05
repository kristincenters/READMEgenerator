require('dotenv').config();
const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const badges = require('badges');

inquirer
	.prompt([
		{
			type: 'input',
			name: 'project',
			message: 'What is your name of your project?',
		},
		{
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
			name: 'install',
			message: 'What command is needed to install dependencies?',
		},
		{
			type: 'input',
			name: 'usage',
			message: 'What does the user need to know about using this app?',
		},
		{
			type: 'input',
			name: 'usage',
			message: 'What does the user need to know when using this app?',
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
		},
		{
			type: 'input',
			name: 'test',
			message: 'How can the user test this application',
		},
	])
	.then(function (response) {
		console.log(response);
		const newREADME = `# Project Title: ${response.project} <br /> ## Description: <br /> *${response.description}*`;
		fs.writeFile('newREADME.md', newREADME, function (err) {
			if (err) {
				return console.log(error);
			}
			console.log('success');
		});
	});
