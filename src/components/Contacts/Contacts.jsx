import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'components/styled';

export const Contacts = ({ contactsList }) =>
    <List>
        {contactsList.map(contact => (<li
        className=''
        key={contact.id}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
    </li>))}
    </List>


Contacts.propTypes = { contactsList: PropTypes.array };
