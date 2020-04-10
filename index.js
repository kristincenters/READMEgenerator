require('dotenv').config();
const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
inquirer.prompt([
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
]);

const gitapi = {
	getUser(username) {
		axios
			.get(`https://api.github.com/users/${username}`, {
				headers: { Authorization: `token ${process.env.GH_TOKEN}` },
			})
			.then(function (response) {
				const username = res.username;
				const image = response.data.avatar_url;
				const email = response.data.email;
				const project = response.project;
				const description = response.description;
				const install = response.install;
				const usage = response.usage;
				const license = response.license;
				const contribute = response.contribute;
				const test = response.test;

				const markdown = `

![Badge](https://img.shields.io/static/v1?label=GitHub_User&message=kristincenters&color=<COLOR>?style=plastic)
			
## ${project}
			
## Description
			
> ${description}
			
## Table of Contents
			
<details>
<summary>Installation</summary>
			
> ${install}
			
</details>
<br>
<details>
			
<summary>Usage</summary>
			
> ${usage}
			
</details>
<br>
<details>
			
<summary>License</summary>
			
> ${license}
			
</details>
<br>
<details>
			
<summary>Contributors</summary>
			
> ${contribute}
			
</details>
<br>
<details>
			
<summary>Testing</summary>
			  
> ${test}
			  
</details>
<br>
			
## Contact me with questions:

#### ${username}
			
<img style="border-radius: 50%" width="100px" height="100px" src="${image}" alt="github headshot">
			
### Email: ${email}`;

				fs.writeFile('newREADME.md', markdown, (err) => {
					if (err) {
						return console.log(err);
					}
				});
			})
			.catch(function (error) {
				console.log(error);
			});
		console.log('success!');
	},
};
