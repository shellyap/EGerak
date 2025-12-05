<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Real-Time Sync App</title>
    <script type="module" src="realtime-sync.js"></script>
</head>
<body>
    <h1>Real-Time Firebase Sync Ready</h1>
    <div id="app"></div>
</body>
</html>


<!-- ========================= -->
<!-- realtime-sync.js (SAVE AS SEPARATE FILE) -->
<!-- ========================= -->

// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// TODO: Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBU1n6OAmYxY_SjFuhYkop7C7CrFJja6Do",
    authDomain: "egerak-4f922.firebaseapp.com",
    projectId: "egerak-4f922",
    storageBucket: "egerak-4f922.firebasestorage.app",
    messagingSenderId: "567427021114",
    appId: "1:567427021114:web:cf5496d2fc14eb84893803",
    measurementId: "G-V6CGGJ81JG"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Example Document
const ref = doc(db, "sync/demo");

// Real-time listener
onSnapshot(ref, (snapshot) => {
    if (snapshot.exists()) {
        document.getElementById("app").innerText =
            "Real-time data: " + JSON.stringify(snapshot.data());
    }
});

// Example write function (call when needed)
async function updateData(newValue) {
    await setDoc(ref, newValue);
}

// For testing: auto-write every 5 seconds
setInterval(() => {
    updateData({ timestamp: Date.now() });
}, 5000);
