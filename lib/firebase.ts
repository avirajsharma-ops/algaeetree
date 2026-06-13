import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const databaseURL =
    process.env.FIREBASE_DATABASE_URL ||
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ||
    "https://placeholder.firebaseio.com";

const app = getApps().length ? getApp() : initializeApp({ databaseURL });

export const database = getDatabase(app);
export function getFirebaseDatabase() {
    return database;
}
export default app;
