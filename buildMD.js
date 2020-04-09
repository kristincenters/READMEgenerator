function buildMD(input, response) {
	console.log(input, response);
	return `

![Badge](https://img.shields.io/static/v1?label=GitHub_User&message=kristincenters&color=<COLOR>?style=plastic)

## ${input.project}

## Description

> ${input.description}

## Table of Contents

<details>
  <summary>Installation</summary>

> ${input.install}

</details>
<br>
<details>

  <summary>Usage</summary>

> ${input.usage}

</details>
<br>
<details>

  <summary>License</summary>

> ${input.license}

</details>
<br>
<details>

  <summary>Contributors</summary>

> ${input.contribute}

</details>
<br>
<details>

  <summary>Testing</summary>
  
>${input.test}
  
</details>
<br>

## Contact me with questions

<img style="border-radius: 50%" src="${res.data.avatar_url}" alt="github headshot">

### Email: ${res.data.email}`;
}
module.exports = buildMD;
