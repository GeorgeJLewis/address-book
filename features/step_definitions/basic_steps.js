<<<<<<< HEAD
const { After, Given, Then, When } = require('cucumber')

After (async function() {
  return await this.closeHomePage()
})
=======
const { After, Given, Then } = require('cucumber')
>>>>>>> c18fd234d8e0a6bb66e884b009374c7de3a9b3cc

After(async function() {
  return await this.closeHomePage()
})

<<<<<<< HEAD
Then('I should see {string}', async function(content) {
  return await this.pageHasTextContent(content)
})

When('I click {string}', async function (btnName) {
  return await this.clickOnButton(btnName)
})

Then('I fill in {string} with {string}', async function (field, content) {
  return await this.fillFormField(field.toLowerCase(), content)
})

Then('I should have {int} contact in my address book', async function(contactCount) {
  return await this.checkContactStorageCount(contactCount)
})

Then('I should no see {string}', async function (content) {
  return await this.pageDoesNotHaveTextContent(content)
=======
Given('I visit the site', async function() {
  return await this.openHomePage()
})

Then('I should see {string}', async function(content) {
  return await this.pageHasTextContent(content)
>>>>>>> c18fd234d8e0a6bb66e884b009374c7de3a9b3cc
})
