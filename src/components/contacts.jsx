export const Contacts = ({ contacts, handelDelete }) => {
    return <div>
        <ul>{contacts.map(({ name, id, number }) => {
            return <li key={id}>{name} : {number}<button onClick={(() => handelDelete(id))}>Delete &times;</button> </li>

        })}</ul>
    </div>;
}
