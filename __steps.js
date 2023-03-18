/*
        |_____________|
        |             |
        |Initial SetUp|
        |_____________|

1. console.firebase.google.com
2. create a new firebase project
3. visit doc(go to docs): Build -> Authentication -> web -> Getting Started
4. Register web app -> firebase project home -> click web -> give name and register
5. Install firebase for your project: npm install firebase
6. DANGEROUS: get firebase config and put it in the firebase.init.js 
7. Export app from firebase.init.js

        |__________________|
        |                  |
        |SetUp The Provider|
        |__________________|

8. create auth using getAuth from firebase by using app from firebase.init.js
9. create a google auth provider. do not forget to use new googleAuthProvider();
10. go to firebase > Build > Authentication > sign In method
11. Enable google sign in method
12. Create a button for google signIn method with a click handler
13. Inside the event handler, call signInWithPopup with auth, provider
14. after signInWithPopup .then result, error

        |__________________|
        |                  |
        |   Display Data   |
        |__________________|


        |_______________________|
        |                       |
        |Add a New SignIn Method|
        |_______________________|
1. enable the sign in method
2. Create github, twitter, facebook etc. app create
3. get clientId and secret
*/