import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { sendLeadNotification } from "./src/utils/email";

// Firebase configuration using the shared project
const firebaseConfig = {
    apiKey: "AIzaSyBDoScWA2X7DGpAaswl2w52z5isNKjfbz8",
    authDomain: "dimak-1b709.firebaseapp.com",
    projectId: "dimak-1b709",
    storageBucket: "dimak-1b709.firebasestorage.app",
    messagingSenderId: "193571394744",
    appId: "1:193571394744:web:100a239e2c0b4d1024904d",
    measurementId: "G-HEPYX6E5W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export async function saveLead(data: any) {
    console.log('Initiating lead capture (DIMAK):', data);
    const leadData = {
        ...data,
        source: 'DIMAK Corporate',
        timestamp: new Date().toISOString()
    };

    try {
        // 1. Trigger email notification immediately (don't wait for Firestore)
        const emailPromise = sendLeadNotification(leadData)
            .then(success => {
                if (success) console.log("Email notification sent successfully");
                else console.error("Email notification returned false");
                return success;
            })
            .catch(err => {
                console.error("Email notification promise failed:", err);
                return false;
            });

        // 2. Start Firestore write in parallel
        const firestorePromise = addDoc(collection(db, "leads"), leadData)
            .then(docRef => {
                console.log("Lead document written with ID: ", docRef.id);
                return docRef.id;
            })
            .catch(e => {
                console.error("Firestore write failed:", e);
                return null;
            });

        // 3. Wait for the email to attempt to send before resolving
        // This ensures the user sees 'Success' even if Firestore is lagging
        await emailPromise;
        
        // We return the firestore promise result but it's now decoupled from the UI hang
        return await firestorePromise;
    } catch (e) {
        console.error("Critical error in saveLead:", e);
        throw e;
    }
}
