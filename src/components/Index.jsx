import React from 'react'
import { AuthContext } from '../providers/AuthProvider'
import Chat from './Chat'
import ContactList from './ContactList'
import {db} from '../firebase'

const Index = () => {
    
    const {session}                = React.useContext(AuthContext)
    const [contacts, setContacts]  = React.useState([])
    const [contact,  setContact]   = React.useState(null)
    const [messages,  setMessages] = React.useState([])
    
    React.useEffect( () => {
        db.collection('sessions').onSnapshot(query => {
            const arrayContacts = query.docs.map(item => item.data())
            const arrayFilter   = arrayContacts.filter( item => item.uid !== session.uid)
            setContacts(arrayFilter)
        })
    },[session, setContacts])

    const setChat = (contact) => {
        setContact(contact)
        const search = session.uid + contact.uid
        db.collection('messages').where("search","array-contains",search).orderBy("date", "asc").onSnapshot(query => {
            const arrayMessages = query.docs.map(item => ({...item.data(), id: item.id }))
            setMessages(arrayMessages)
        })

    }


    return (
        <div>
            {
                session.uid ? 
                    <div className='row'>
                        <div className="col-3">
                            <ContactList contacts={contacts} setChat={setChat} />
                        </div>
                        <div className="col-9">
                            <Chat session={session} contact={contact} messages={messages} setMessages={setMessages} />
                        </div>
                    </div>
                : 
                    <div className="mt-5 text-center">
                        <h1>You are not logged</h1>
                    </div>
            }
        </div>
    )
}



export default Index
