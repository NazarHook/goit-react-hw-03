import css from './Contact.module.css'
export default function Contact({name, number, id, onDelete}) {
    return (
        <div className={css.container}>
<p className={css.text}>{name}</p>
<p className={css.text}>{number}</p>
<button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
</div>
    )
}