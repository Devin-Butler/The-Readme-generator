// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers,title) {
  return `# ${answers.title}
##Le Project Name
${answers.Projectname}
##Le Description
${answers.Description}
##Le Installation
${answers.Installation}
##Le Usage
${answers.usage}
##Le Credits
${answers.credits}
##Le License
${answers.license}
`;
}

module.exports = generateMarkdown;
