import React from 'react'
import {db} from '../firebase'

const Chat = (props) => {

    const {session, contact, messages} = props
    const [message,  setMessage]                    = React.useState('')

    const sendMessage = async() => {
        try{
            const right   = session.uid + contact.uid
            const inverse = contact.uid + session.uid

            if(message.trim()){

                const params = {
                    date: Date.now(),
                    from: session.uid,
                    message: message,
                    search: [right, inverse],
                    to: contact.uid,
                }
                
                await db.collection('messages').add(params)
                setMessage('')

            }
        
        }catch(error){
            console.log(error);
        }

    }

    return contact ? (
        <div className='mt-3 px-2 p-3'>
            { 
                messages.map(message => 
                    {
                        if(message.to === session.uid){
                            return  <div key={message.id} className='d-flex justify-content-start mb-2'>
                                        <span style={{fontSize:"140%"}} className='badge badge-pill badge-dark'>
                                            {message.message}
                                        </span>
                                    </div>
                        }else{
                            return <div key={message.id} className='d-flex justify-content-end mb-2'>
                                        <span style={{fontSize:"140%"}} className='badge badge-pill badge-light'>
                                            {message.message}
                                        </span>
                                    </div>
                        }
                    }
                    
                )
            }
            <div style={{position:"", bottom:"0"}} className="input-group">
                <input type="text" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={sendMessage} className="btn btn-dark">Send</button>
            </div>
        </div>
    ) : (<div className='mt-3 px-2 p-3'></div>)
}

export default Chat
