const storage = window.localStorage
const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem('contacts'))
  if (contacts) {
    const ul = document.createElement('ul')
    contacts.forEach(contact => {
      let li = document.createElement('li')
      li.innerHTML = `
      <span>${contact.name}</span> |
      <span>${contact.email}</span> |
      <span>${contact.phone}</span>
      `
      ul.appendChild(li)
    })
    div.appendChild(ul)
  } else {
    div.innerHTML = '<p>You have no contacts in your address book</p>'
  }
  let div = document.createElement('.contact-list')
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
