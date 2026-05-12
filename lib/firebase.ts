import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const app = initializeApp({
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
});

export const database = getDatabase(app);
export default app;
