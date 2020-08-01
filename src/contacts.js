const path = require( 'path' );
const fs = require( 'fs' ).promises;
const shortid = require( 'shortid' );

const contactsPath = path.join( __dirname, "db/contacts.json" );

const listContacts = async () => {
    try {
      const contacts = await fs.readFile(contactsPath, "utf8");
      return JSON.parse(contacts);
    } catch (error) {
        console.error(error);
    }
  };
  
  const getContactById = async (contactId) => {
    try {
      const contacts = await fs.readFile(contactsPath, "utf-8");
      parsedContacts = JSON.parse(contacts);
      return parsedContacts.find((contact) => contact.id === contactId);
    } catch (error) {
      console.error(error);
    }
  }
  
  const removeContact = async (contactId) => {
    try {
      const contacts = await fs.readFile(contactsPath, "utf-8");
      const parsedContacts = JSON.parse(contacts);
      const newContactsArr = parsedContacts.filter( contact => contact.id !== contactId );
      await fs.writeFile(contactsPath, JSON.stringify(newContactsArr));
      return newContactsArr;
    } catch (error) {
      console.error(error);
    }
  }
  
  const addContact = async (name, email, phone) => {
    try {
      const contacts = await fs.readFile(contactsPath, "utf8");
      const parsedContacts = JSON.parse(contacts);
      const contactToAdd = {
        id: shortid.generate(),
        name,
        email,
        phone,
      };
      parsedContacts.push(contactToAdd);
      await fs.writeFile(contactsPath, JSON.stringify(parsedContacts));
      return parsedContacts;
    } catch (error) {
      console.error(error);
    }
  }
  

module.exports = { listContacts, getContactById, removeContact, addContact };