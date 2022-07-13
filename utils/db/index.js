import admin from "firebase-admin";
import serviceAccount from "./discopersc-d84de-firebase-adminsdk-nnnni-12c1caafc6.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    // admin.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin;
