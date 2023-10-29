import { db } from "config/firebase";
import { collection, CollectionReference } from "firebase/firestore";

export default class StatsSchema {
    static statsRef: CollectionReference = collection(db, "stats");
}