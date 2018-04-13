const storage = window.localStorage
const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem('contacts'))
  let div = document.createElement('div')
  let body = document.querySelector('body')
  div.innerHTML('<h1></h1>')
  body.appendChild(div)
}
document.addEventListener('DOMContentLoaded', () => {
  renderContacts()
  const addContactForm = document.querySelector('.new-contact-form')

  addContactForm.addEventListener('submit', event => {
    event.preventDefault()

    const { name, email, phone, company, notes, twitter } = addContactForm.elements

    const contact = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      notes: notes.value,
      twitter: twitter.value,
    }

    console.log(contact)

    console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
    storage.setItem('contacts', JSON.stringify([contact]))
  })
})
