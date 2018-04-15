const storage = window.localStorage

const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem('contacts'))

  let div = document.querySelector('.contact-list')
  // let button = document.querySelector('.hide-form')

  if (contacts) {
    div.innerHTML = ''
    const ul = document.createElement('ul')

    contacts.forEach(contact => {
      let li = document.createElement('li')

    li.innerHTML = `
      <span>${contact.name}</span>
      <span>${contact.email}</span>
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

const hideForm = () => {
    console.log('hide form');
    const addContactForm = document.querySelector('.new-contact-form')
    addContactForm.hidden = true
}

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()
  const addContactForm = document.querySelector('.new-contact-form')
  const addContactBtn = document.querySelector('.add-contact')

  addContactForm.hidden = true

  addContactBtn.addEventListener('click', event => {
    if(addContactForm.hidden == true){
      addContactForm.hidden = false
      addContactBtn.innerHTML = 'Cancel'
    } else {
      addContactForm.hidden = true
      addContactBtn.innerHTML = 'Add Contacts'
    }
  })

  addContactForm.addEventListener('submit', event => {
    event.preventDefault()
    const storage = window.localStorage

    const { name, email, phone, company, notes, twitter } = addContactForm.elements

    const contact = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      notes: notes.value,
      twitter: twitter.value,
    }

    console.log(contact)

    let contacts = JSON.parse(storage.getItem('contacts')) || []

    contacts.push(contact)

    storage.setItem('contacts', JSON.stringify(contacts))
    renderContacts()
    resetFormField()
    hideForm()
  })
})
