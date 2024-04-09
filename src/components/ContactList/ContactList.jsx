import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul className={styles.list}>
        {contacts.map(({ name, number }) => (
          <li className={styles.item} key={name}>
            <Contact
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
