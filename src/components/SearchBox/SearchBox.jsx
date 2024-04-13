import css from './SearchBox.module.css'
export default function SearchBox({value, onChange}) {
    return (
        <div className={css.searchBox}>
            <p>Find contacts by name</p>
            <input type="text" 
            className={css.searchInput}
            value={value}
            onChange={event => onChange(event.target.value)}
            />
        </div>
    )    
}