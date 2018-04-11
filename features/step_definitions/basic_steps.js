const { After, Given, Then, When } = require('cucumber')

After (async function() {
  return await this.closeHomePage()
})

Given('I visit the site', async function() {
  return await this.openHomePage()
})

Then('I should see {string}', async function(content) {
  console.log(content)
  return await this.pageHasTextContent(content)
})

When('I click {string}', async function (string) {
  return await this.clickOnAddContactBtn()
})

Then('I fill in {string} with {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
})

Then('I should have {int} contact in my address book', function (int) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
})

Then('I should no see {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
})
