import React, { useState } from 'react'
import { useEffect } from 'react';
import { messaging, token } from './firebase';
import axios from 'axios';
// import { token } from '../firebase-messaging-sw';




const P2 = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    useEffect(() => {
        const requestPermission = async () => {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                console.log('Notification permission granted.');
                try {
                    const data = await token
                  
                    
                
                    console.log(data)
                    
                } catch (e) {
                    console.log('here is the error',e)
                    
                }
                

            }
          
        };

        requestPermission();
    }, [])
    const send = async () =>{
        console.log('submit')
        const data = await axios.get('http://localhost:1000/api/v1/')
        console.log(data)

    }
    return (
        <div>
           Title <input type="text" />
            Body <input type="text" />

            <button onClick={send}>Submit</button>
        </div>
    )
}

export default P2