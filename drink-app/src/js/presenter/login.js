import React from 'react';
import {auth} from '../firebase';
import LoginView from '../views/LoginView';

function signIn(email, password, toDrinkList) {
    auth().signInWithEmailAndPassword(email, password)
    .then(() => {console.log('Succesfully signed in')})
    .then(toDrinkList)
    .catch((error) => {
        console.log(error.message)
    });
}

function Login({ToSearch: [toSearch], ToSignUp: [toSignUp], ToDrinkList: [toDrinkList]}) {
	const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    if (auth().currentUser) {
        toDrinkList()
    }
	return (
        <LoginView
            NewEmail={(email) => setEmail(email)}
            NewPassword={(password) => setPassword(password)}
            NewSignIn={(event) => {
                event.preventDefault()
                signIn(email, password, toDrinkList)
            }}
            ToSearch={toSearch}
            ToSignUp={toSignUp}
            ToSignOut={() => auth().signOut()}
        />
	);
}

export default Login;

/*

function signOut() {
	return auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>;
}

const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
};


let user = firebase.auth().currentUser;
	let name, userEmail, photoUrl, uid, emailVerified;

	if (user != null) {
		name = user.displayName;
		userEmail = user.email;
		photoUrl = user.photoURL;
		emailVerified = user.emailVerified;
		uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
		// this value to authenticate with your backend server, if
		// you have one. Use User.getToken() instead.
	}

React.useEffect(() => {
        try {
            db.ref('chat'.on('value'), snapshot => {
                console.log(snapshot)
                if (snapshot.val()) {
                    const values = Object.values(snapshot.val())
                    console.log(values)
                    setMessages(values)
                }
            })
        }
        catch(error) {
            console.log(error);
        }   
    }, []);

const handleSubmit = () => {
        try {
            db.ref('chat').push({
                id: Date.now(),
                group: 'group1',
                content: myMessage,
                blba: 1,
            });
        }
        catch(error) {
            console.log(error)
        }
    }

<div>
                {messages.map((message) => 
                    <div key={message.id}>
                        <span>{message.group}</span>
                        {"   "}
                        <span>{message.content}</span>
                    </div>
                )}
            </div>
React.useEffect(() => {
    auth().onAuthStateChanged((user) => {
        if(user) {
            setAuthenticated(true);
            setIsLoading(false);
        }
        else {
            setAuthenticated(false);
            setIsLoading(false);
        }
    })
}, [])

console.log(auth().currentUser)

db.ref('person').push({
    name: name,
    age: age,
    score: score,
    timestamp: Date.now(),
    id: user.uid
})

db.ref('person').on('value', snapshot => {
    if(snapshot.val()){
        const chats = Object.values(snapshot.val())
        setChats(chats);
    }
}) */
