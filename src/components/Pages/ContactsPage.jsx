import React from 'react';
import Header from '../Header';
import Contacts from '../Contacts/Contacts';
import cl from "../Header/header.module.css"

const ContactsPage = () => {
  return (
    <div className={cl.PageImage}>
      <Header/>
      <Contacts/>
    </div>
  );
};

export default ContactsPage;