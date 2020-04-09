function buildMD(data, response) {
	return `

![Badge](https://img.shields.io/static/v1?label=GitHub_User&message=kristincenters&color=<COLOR>?style=plastic)

## ${data.project}

## Description

> ${data.description}

## Table of Contents

<details>
  <summary>Installation</summary>

> ${data.install}

</details>
<br>
<details>

  <summary>Usage</summary>

> ${data.usage}

</details>
<br>
<details>

  <summary>License</summary>

> ${data.license}

</details>
<br>
<details>

  <summary>Contributors</summary>

> ${data.contribute}

</details>
<br>
<details>

  <summary>Testing</summary>
  
>${data.test}
  
</details>
<br>

## Contact me with questions

<img style="border-radius: 50%" src="${data.avatar_url}" alt="github headshot">

### Email: ${data.email}`;
}
module.exports = buildMD;
