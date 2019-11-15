// Firebase Config
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

// Sendgrid Config
import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const newOrder = functions.firestore.document('orders/{orderId}').onCreate( async (change, context) => {

    // Read the post document
    const orderSnap = await db.collection('orders').doc(context.params.orderId).get();

    // Raw Data
    const order = orderSnap.data();

    // Email
    const msg = {
        to: order.customerEmail,
        from: 'hello@fireship.io',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: `Nova Porudzbina`,
            name: order.customerName,
            address: order.customerAddress
        },
    };

    // Send it
    return sgMail.send(msg);

});