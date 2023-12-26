import "./app.css";
import React, { useState, useEffect } from "react";
import { auth } from "../components/auth";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function App() {

    const [user, setUser] = useState([]);

    const userRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await getDocs(userRef);
                const users = data.docs.map((doc) => ({...doc.data(), id: doc.id, email: doc.email, name: doc.name, last_name: doc.last_name, pic: doc.pic }));
                console.log(users);
            }catch (error) {
                console.log(error);
            }

            db.collection("users").add({
                id: user.id,
                email: user.email,
                name: user.name,
                last_name: user.last_name,
                pic: user.pic,
            }); 
            then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });


        
        };

        
    }, []);

    return (
        <div>className= "App"
            <auth />
        </div>
    );
}

export default App;