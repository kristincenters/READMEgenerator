var inquirer = require('inquirer');
var fs = require('fs');

inquirer.prompt([
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
]);
//function writeToFile(README.md, data) {
//}
//function init() {
//}
//init();
