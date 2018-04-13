const storage = window.localStorage
const renderContacts = () => {
  let div = document.querySelector('.contact-list')
  const contacts = JSON.parse(storage.getItem('contacts'))
  if (contacts) {
    div.innerHTML = ''
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
}

const resetFormField = () => {
  const addContactForm = document.querySelector('.new-contact-form')

  addContactForm.elements.name.value = ''
  addContactForm.elements.email.value = ''
  addContactForm.elements.phone.value = ''
  addContactForm.elements.company.value = ''
  addContactForm.elements.notes.value = ''
  addContactForm.elements.twitter.value = ''
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

    // let contacts
    // if (JSON.parse(storage.getItem('contacts'))) {
    //   contacts = JSON.parse(storage.getItem('contacts'))
    //
    // } else {
    //   contacts = []
    // }
    let contacts = JSON.parse(storage.getItem('contacts')) || []

    contacts.push(contact)
    //console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
    storage.setItem('contacts', JSON.stringify(contact))
    renderContacts()
    resetFormField()
  })
})
