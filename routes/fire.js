var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {
    apiKey: "AIzaSyDSLRypcYx2yHSqpVXJMBrzYw1xAHZtgYI",
    authDomain: "test-iot-esp.firebaseapp.com",
    databaseURL: "https://test-iot-esp.firebaseio.com",
    projectId: "test-iot-esp",
    storageBucket: "test-iot-esp.appspot.com",
    messagingSenderId: "467772798973"
//   apiKey: "1a2b3c4d5e6f7g8h9i0j",
//   authDomain: "lintang.firebaseapp.com",
//   databaseURL: "https://lintang.firebaseio.com",
//   projectId: "lintang",
//   storageBucket: "lintang.appspot.com",
//   messagingSenderId: "1234567890"
};
const fire = firebase.initializeApp(config);
module.exports = fire;