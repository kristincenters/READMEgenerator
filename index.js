require('dotenv').config();
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const axios = require('axios');
const getapi = require('./gitapi.js');
const genMD = require('./buildMD');
const queries = inquirer
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
	.then((queries) => {
		console.log(queries);
		getapi
			.getUser(queries.username)
			.then((response) => {
				genMD(queries, response.data);
				const markdown = genMD(queries, response.data);
				fs.writeFile('./newREADME.md', markdown, () => {
					console.log('works!');
				});
			})
			.catch((error) => {
				console.log(error);
			});
	});
module.exports = queries;
