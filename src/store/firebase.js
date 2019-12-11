import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBh8pwrgGu9Dz7-YGzYNAE4rvw9W4nhZIc",
  authDomain: "e-commerce-db-3b1c6.firebaseapp.com",
  databaseURL: "https://e-commerce-db-3b1c6.firebaseio.com",
  projectId: "e-commerce-db-3b1c6",
  storageBucket: "e-commerce-db-3b1c6.appspot.com",
  messagingSenderId: "447614497996",
  appId: "1:447614497996:web:89591d12f17b193b46fe69"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //If User not connected we do nothing
  if (!userAuth){
    return;
  }
  //If User is connected we'll check if the user already exist in db if not we gonna add him
  //userRef contains the informations of our doc for this id !!not the data!! 
  const userRef = db.doc(`users/${userAuth.uid}`);
  //snapshot contains all the data for the current doc => await cause get is a promise
  const snapshot = await userRef.get();

  //Check if the user with this id already exist in our db
  if(!snapshot.exists){
    const docData = {
      displayName: userAuth.displayName,
      email: userAuth.email,
      created_at: firebase.firestore.Timestamp.now(),
      ...additionalData
    };  
    try {
      await userRef.set(docData)
    } catch (error) {
      console.log('error creating user',error.message);
    }
  }
  
  return userRef;
}

export const convertCollectionsSnapShotToMap = (collections) =>{
  const transformCollection = collections.docs.map(doc =>{
    const {title,items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    }
  })

  return transformCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator; 
  },{})
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firestore();
//Seeder
export const collectionSeeder = async (collectionId, documentsToAdd)=>{
  const collectionRef = db.collection(collectionId);
  const batch = db.batch();
  documentsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef,obj)
  })
  return await batch.commit()
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;