const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000'

class AddressBookWorld {
  constructor() {}
<<<<<<< HEAD

async openHomePage() {
  this.browser = await puppeteer.launch({headless: false, slowmo: 40})
  this.page = await this.browser.newPage()
  await this.page.goto(HOME_PAGE)
}

async closeHomePage() {
  await this.browser.close()
}

async pageHasTextContent(expectedContent) {
  const pageContent = await this.page.content()
  let match = pageContent.match(expectedContent)
  let actualContent = match[0]

  expect(actualContent).to.be.eq(expectedContent)
}

async pageDoesNotHaveTextContent(unexpectedContent) {
  const pageContent = await this.page.content()
  let actualContent = pageContent.match(unexpectedContent)

  expect(actualContent).to.be.eq(null)
}

async clickOnButton(btnName){
  const btnSelector = this.btnSelectorFormName(btnName.toLowerCase())
  await this.page.waitForSelector(btnSelector)
  await this.page.click(btnSelector)
}

async fillFormField(field, content) {
  const inputSelector = `#contact-${field}`
  await this.page.waitForSelector(inputSelector)
  this.inputElement = await this.page.$(inputSelector)
  await this.inputElement.type(content)
}

async checkContactStorageCount(expectedCount) {
  const actualCount = await this.page.evaluate(
    () => {
      return JSON.parse(window.localStorage.getItem('contacts')).length
})

 expect(actualCount).to.be.eq(expectedCount)
}

  btnSelectorFormName(btnName) {
    switch (btnName) {
      case 'add contact':
       return '.add-contact'
       break
      case 'save contact':
       return '.save-contact'
       break
      default:
       throw `${btnName} button is not defined`
       break
    }
=======
  //open the homepage using puppeteer
  //async/await
  async openHomePage() {
    this.browser = await puppeteer.launch()
    this.page = await this.browser.newPage()
    await this.page.goto(HOME_PAGE)
>>>>>>> c18fd234d8e0a6bb66e884b009374c7de3a9b3cc
  }

  async closeHomePage() {
    await this.browser.close()
  }

  async pageHasTextContent(expectedContent) {
    const pageContent = await this.page.content()
    console.log(pageContent)
    let match = pageContent.match(expectedContent)
    console.log(match)
    let actualContent = match[0]

    expect(actualContent).to.be.eq(expectedContent)
  }
}

setWorldConstructor(AddressBookWorld)
