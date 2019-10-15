import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let FirebaseService = class FirebaseService {
    constructor(db) {
        this.db = db;
    }
    logData() {
        console.log(this.db.collection('articles').snapshotChanges());
    }
};
FirebaseService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], FirebaseService);
export { FirebaseService };
//# sourceMappingURL=firebase.service.js.map