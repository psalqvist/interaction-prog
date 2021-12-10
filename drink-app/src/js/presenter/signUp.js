import React from 'react';
import {auth} from '../firebase';
import SignUpView from '../views/SignUpView';

function createUser (email, password, toLogin) {
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => console.log('Succesfully signed up'))
    .then(toLogin)
    .catch((error) => console.error(error.message))
}

function SignUp({ToLogin: [toLogin]}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <SignUpView
            NewEmail={(email) => setEmail(email)}
            NewPassword={(password) => setPassword(password)}
            NewSignUp={(event) => {
                event.preventDefault()
                createUser(email, password, toLogin)
            }}
            ToLogin={toLogin}
        />
    )
}

export default SignUp;