import React from 'react'
import { db, auth, googleProvider } from '../firebase'

export const AuthContext = React.createContext()

const AuthProvider = (props) => {
    
    const initialSession = {uid: null, email: null, status: false}

    const [session, setSession] = React.useState(initialSession)
    
    React.useEffect(() => {
        auth.onAuthStateChanged( (user) => {
            if(user){
                setSession({uid: user.uid, email: user.email, status : true})
            }else{
                setSession({uid: null, email: null, status: false})
            }
        })
    },[session, setSession])

    const getLogout = () => {
        auth.signOut()
    }

    const getLogin = async() => {
        try{
            await auth.signInWithPopup(googleProvider).then(function(response) {
                
                const params = {
                    uid: response.user.uid,
                    photo: response.user.photoURL,
                    email: response.user.email,
                    name: response.user.displayName
                }
                console.log(params)

                db.collection("sessions").doc(params.uid).set(params)
            })
        }catch (error){
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{
            session, getLogin, getLogout
        }}>
           {props.children} 
        </AuthContext.Provider>
    )
}

export default AuthProvider
