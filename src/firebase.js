import firebase from "firebase/app";
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBdI2iZwKTHwEoHmHRVSbhfDF9f-mwyC0U",
    authDomain: "mobile-track-systems.firebaseapp.com",
    databaseURL: "https://mobile-track-systems.firebaseio.com",
    projectId: "mobile-track-systems",
    storageBucket: "mobile-track-systems.appspot.com",
    messagingSenderId: "760345462431",
    appId: "1:760345462431:web:70bbd427b63691ae5ec4aa",
    measurementId: "G-MVJSR0B7YJ"
};
firebase.initializeApp(firebaseConfig);

firebase.firestore().enablePersistence().catch((err) => {
	console.log(err.code)
});

export default firebase;