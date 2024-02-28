// // import firebase from 'firebase/app';
// // import 'firebase/firestore'; // If you're using Firestore

// // const firebaseConfig = {
// //     apiKey: 'YOUR_API_KEY',
// //     authDomain: 'YOUR_AUTH_DOMAIN',
// //     projectId: 'YOUR_PROJECT_ID',
// //     storageBucket: 'YOUR_STORAGE_BUCKET',
// //     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
// //     appId: 'YOUR_APP_ID'
// // };

// // firebase.initializeApp(firebaseConfig);

// // export default firebase;



// // import firebase from 'firebase/app';
// // import 'firebase/firestore'; // If you're using Firestore
// // import serviceAccount from './serviceAccountKey.json';

// // const serviceAccount = require('./serviceAccountKey.json');

// // const firebaseConfig = {
// //     credential: firebase.credential.cert(serviceAccount),
// //     databaseURL: "https://your-project-id.firebaseio.com" // Only needed for Realtime Database
// // };

// // firebase.initializeApp(firebaseConfig);

// // export default firebase;


// import firebase from 'firebase/app';
// import 'firebase/firestore'; // If you're using Firestore
// import serviceAccount from './serviceAccountKey.json'; // Assuming serviceAccountKey.json is in the same directory as firebase.js

// const firebaseConfig = {
//     credential: firebase.credential.cert(serviceAccount),
//     databaseURL: "https://your-project-id.firebaseio.com" // Only needed for Realtime Database
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// export default firebase;
