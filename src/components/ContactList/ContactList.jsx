import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
export default function ContactList({userData, onDelete}) {
    return (
        <ul className={css.contactList}>
          {userData.map(item => (
            <li className={css.item} key={item.id}>
                <Contact 
                name={item.name} 
                id={item.id} 
                number={item.number} 
                onDelete={onDelete}></Contact>
            </li>
          ))}
        </ul>
    )
}