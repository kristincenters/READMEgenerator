var inquirer = require('inquirer');
var fs = require('fs');

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
			type: 'checkbox',
			message: 'License types?',
			name: 'stack',
			choices: ['MIT', 'Creative Commons', 'GNU'],
		},
		{
			type: 'list',
			message: 'What is your preferred method of communication?',
			name: 'contact',
			choices: ['email', 'phone', 'telekinesis'],
		},
	])
	.then(function (data) {
		var filename = data.name.toLowerCase().split(' ').join('') + '.json';

		fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
			if (err) {
				return console.log(err);
			}

			console.log('Success!');
		});
	});
