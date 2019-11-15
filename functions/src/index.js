const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const SENDGRID_API_KEY = firebaseConfig.sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail = functions.firestore
    .document('orders/{orderId}')
    .onCreate(event => {

        const userId = event.params.userId;

        const db = admin.firestore()

        return db.collection('orders').doc(orderId)
                 .get()
                 .then(doc => {

                    const order = doc.data()

                    const msg = {
                        to: order.customerEmail,
                        from: 'svastarijawebstore@gmail.com',
                        subject:  'New Order',
                        // text: `Hey ${toName}. You have a new follower!!! `,
                        // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,
            
                        // custom templates
                        templateId: 'NewOrderAdmin',
                        substitutionWrappers: ['{{', '}}'],
                        substitutions: {
                          Sender_Name: order.customerFirstName,
                          Sender_Address: order.CustomerAddress, 
                          Sender_City: order.customerCity,
                          Sender_Zip: order.customerPostalCode
                          // and other custom properties here
                        }
                    };

                    return sgMail.send(msg)
                })
                .then(() => console.log('email sent!') )
                .catch(err => console.log(err) )
                     

});