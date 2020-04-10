function buildMD(data, response) {
	return `

![Badge](https://img.shields.io/static/v1?label=GitHub_User&message=kristincenters&color=<COLOR>?style=plastic)

## My next great project

## Description

> This project will help developers save and improve workflow with this easy app to crete a README document.

## Table of Contents

<details>
  <summary>Installation</summary>

> $npm i or install

</details>
<br>
<details>

  <summary>Usage</summary>

> Clone repo, secure git api token and install packages axios, inquirer and dotenv

</details>
<br>
<details>

  <summary>License</summary>

> MIT

</details>
<br>
<details>

  <summary>Contributors</summary>

> Clone the reop and follow instructions

</details>
<br>
<details>

  <summary>Testing</summary>
  
>Forking the repo.
  
</details>
<br>

## Contact me with questions

<img style="border-radius: 50%" src="https://media-exp1.licdn.com/dms/image/C4D03AQFr3xBNZNkpGg/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=_vL8lyTj3WL5RiHrvf_Fsr7Eye2lDOjLbN9MAry13HM" alt="github headshot">

### Email: Kristin.centers@gmail.com`;
}
module.exports = buildMD;
