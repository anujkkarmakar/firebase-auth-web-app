const firebaseConfig = {
    apiKey: "AIzaSyCo8e4yfJvGtTIc0QDejI4JYR6fFJr5ETE",
    authDomain: "test-auth-bb13a.firebaseapp.com",
    projectId: "test-auth-bb13a",
    storageBucket: "test-auth-bb13a.appspot.com",
    messagingSenderId: "573131217040",
    appId: "1:573131217040:web:8525b1f80f5c2e14caa015",
    measurementId: "G-ZPTSFJ1D8J"
};

const defaultProject = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

let register = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
        stateChangeObserver();
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
    });
};

let signOut = () => {
    auth.signOut().then(() => {
        // Sign-out successful.
        alert("Sign-out-successful");
        stateChangeObserver();
      }).catch((error) => {
        // An error happened.
        alert("Sign out error");
        console.log(error.message);
        console.log(error.code);
      });
};

let stateChangeObserver = () => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            // user signed in. Take to different page the dashboard.html;
            var uid = user.uid;
            console.log(uid);
            console.log("Goto dashboard.html");
            window.location.replace("./dashboard.html"); 
        } else {
            console.log("User sign out");
            // take the user back to index.html
            console.log("Goto index.html");
            window.location.replace("./index.html");
        }
    });
};
