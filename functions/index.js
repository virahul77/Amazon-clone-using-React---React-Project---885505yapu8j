const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
// const { } = require("@firebase/util");

const stripe = require("stripe")("sk_live_...8a0k");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello from cloud");
});

app.post("/payments/create", async (req,res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount : total,
        currency : "inr"
    })

    res.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})


exports.api = functions.https.onRequest(app);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


