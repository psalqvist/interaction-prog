import {auth, db} from '../firebase';

function firebaseReadData({model}) {
    let userId = auth().currentUser.uid;
    db.ref('/users/' + userId + '/drinks').once('value').then((snapshot) => {
        snapshot.forEach((drink) => {
            model.addToDrinkList(drink.val());
        });
    });
}

function firebaseAddDrink(drink) {
    let userId = auth().currentUser.uid;
    try {
        db.ref('users/' + userId + '/drinks/' + drink.idDrink).set(drink);
    }
    catch(error) {
        console.log(error)
    }
}

function firebaseRemoveDrink(drink) {
    let userId = auth().currentUser.uid;
    try {
        db.ref('users/' + userId + '/drinks/' + drink.idDrink).remove();
    }
    catch(error) {
        console.log(error);
    }
}

function firebaseSetRating(drink) {
    let userId = auth().currentUser.uid;
    db.ref('users/' + userId + '/drinks/' + drink.idDrink + '/rating').set(drink.rating)
}

export {firebaseAddDrink, firebaseRemoveDrink, firebaseReadData, firebaseSetRating};

/*

 let userId = auth().currentUser.uid;
    let drinkList = [];
    db.ref('/users/' + userId + '/drinks/').once('value').then((snapshot) => {
        console.log(snapshot.val())
        snapshot.forEach((drink) => {
            drinkList.push(drink.val())
            console.log(drinkList)
        });
        console.log("FINAL",drinkList)
    });
}
    /*
    return db.ref('/users/' + userId).once('value').then((snapshot) => {
        let drinkList = (snapshot.val() && snapshot.val().drinks) || null;
        console.log(drinkList, "SNAPSHOT", snapshot.val())
        if (drinkList) {
            drinkList.forEach((drink) => {
                console.log(drink)
            })
        }      
        else {

        }
    });
function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    });
  }
*/
