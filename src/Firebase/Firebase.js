import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjGPhBhDbzrWsAQvemidx2SiAIPHhKWeQ",
  authDomain: "servi-gas-d235b.firebaseapp.com",
  projectId: "servi-gas-d235b",
  storageBucket: "servi-gas-d235b.appspot.com",
  messagingSenderId: "563844960245",
  appId: "1:563844960245:web:92b164bb6ca5d0105d9abc",
  measurementId: "G-K2SQBEWV4G",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
