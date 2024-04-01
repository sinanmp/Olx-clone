import {createUserWithEmailAndPassword  ,onAuthStateChanged,getAuth} from 'firebase/auth'
import {auth ,db} from '../services/firebase.config'


export async function SignUP(username , email,password ,phone){
    try {
        console.log('its coming here')
       const result = await createUserWithEmailAndPassword(auth , email,password)


        console.log(result ,'this is result')
    
    } catch (error) {
        console.log(error)
    }
 
}