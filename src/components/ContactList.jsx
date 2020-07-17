import React from 'react'

const ContactList = (props) => {
    
    const {contacts, setChat} = props

    return (
        <div>
            <ul className="list-group p-3">
                {   
                    contacts.map((contact => 
                        <li key={contact.uid} style={{cursor:"pointer"}} onClick={() => setChat(contact)} className="list-group-item d-flex justify-content-between align-items-center">
                            <b>{contact.name}</b> - <span>{contact.email}</span>
                            {/* <span className="badge badge-dark badge-pill">14</span> */}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ContactList
