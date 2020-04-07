require('dotenv').config();
const fs = require('fs');
const inquirer = require('inquirer');
//const axios = require('axios');
//const badges = require('badges');
const gitapi = require('./gitapi.js');

inquirer
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
		},
	])
	.then(function (response) {
		const generateResponse = {
			username: response.username,
			project: response.project,
			description: response.description,
			install: response.install,
			usage: response.usage,
			license: response.license,
			contribute: response.contribute,
			test: response.test,
		};
		const newREADME = `## ${response.project} 
        
## Description 
${response.description}
        
## Table of Contents: 

- Installation
>> ${response.install}

- Usage
>>${response.usage}

- License
>>${response.license}

- Contributors
>>${response.contribute}

- Testing
>>${response.test}

## Contact
<img src="${response.avatar_url}">
### For information or additional question, contact ${response.login} at ${response.email}

`;
		fs.writeFile('newREADME.md', newREADME, function (err) {
			if (err) {
				return console.log(error);
			}
		});
	});
console.log(gitapi.getUser);
