import admin from "../../utils/db";
import nodemailer from "nodemailer";
import sendVerificationEmail from "../../utils/sendVerificationEmail";
export default async function register(req, res) {
  try {
    const user = await admin
      .auth()
      .createUser({ email: req.body.email, password: req.body.password });
    try {
      await sendVerificationEmail(user.email);
      const userDocRef = admin.firestore().collection("users").doc(user.uid);
      if (req.body.refLink) {
        const referedRef = admin
          .firestore()
          .collection("users")
          .doc(req.body.refLink);
        admin.firestore().runTransaction((transaction) => {
          return transaction.get(referedRef).then((snapshot) => {
            transaction.set(userDocRef, {
              referidos: [],
              creador: req.body.creador ? req.body.creador : false,
              date: new Date().getDate(),
              wallet: [],
              id: ("" + new Date().getMilliseconds()).slice(0, -8),
            });
            if (!snapshot.exists) return;
            let referedUserArray = snapshot.get("referidos");
            referedUserArray.push(req.body.user.uid);
            return transaction.set(
              referedRef,
              { referidos: referedUserArray },
              { merge: true }
            );
          });
        });
      } else {
        userDocRef.set({
          referidos: [],
          creador: req.body.creador ? req.body.creador : false,
          date: new Date().getDate(),
          wallet: [],
          id: ("" + new Date().getTime()).slice(5),
        });
      }
    } catch (err) {
      await admin.auth().deleteUser(user.uid);
      console.log(err);
    }

    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
}
