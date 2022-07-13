import nodemailer from "nodemailer";
import admin from "./db";
import ojo from "../public/ojo.png";
const smtpTransport = nodemailer.createTransport({
  host: "discoper.io",
  port: 465,
  secure: true,
  auth: {
    user: "noreply@discoper.io",
    pass: process.env.EMAIL_PASS,
  },
});
export default async (userEmail) => {
  console.log(process.env.EMAIL_PASS);
  try {
    let link;
    let tries = 0;
    while (true) {
      if (tries == 3) break;
      tries++;
      try {
        link = await await admin.auth().generatePasswordResetLink(userEmail);
        break;
      } catch (err) {
        throw err;
      }
    }
    const info = await smtpTransport.sendMail({
      from: "'Discoper Social Club' <noreply@discoper.io>",
      to: userEmail,
      subject: "Cambio de contraseña",
      html: `<html>
  <div
    style="
      width: 100%;
      padding: 10px;
      background-color: #f7f7f7;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <div class="" style="margin: 0 auto; text-align: center">
      <img
        src="https://discoper.io/_next/static/media/HorzLogo.66dc0461.png"
        style="
          width: 75%;
          text-align: center;
          max-width: 400px;
          min-width: 50px;
        "
        alt=""
        srcset=""
      />
    </div>
  </div>
  <div
    style="
      width: 100%;
      padding: 50px 10px;
      background-color: #1b1464;
      text-align: center;
    "
  >
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <div
          style="
            width: 50%;
            min-width: 200px;
            margin: 10px auto;
            background-color: #f7f7f7;
            padding: 20px;
            border-radius: 20px;
            box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.2);
          "
        >
          <h1 style="margin: 20px 0px">
            Cambia tu contraseña de forma Segura!
          </h1>
          <p style="margin: 40px 0px">
            Haz click aca para cambiar tu contraseña:
            <br />
          </p>
          <a
            style="
              background-color: #fc1ab8;
              border-radius: 2em;
              color: #f7f7f7;
              box-sizing: border-box;
              padding: 1em !important;
              border-style: none;
            "
            href="${link}"
            >Verificar</a
          >
        </div>
      </tr>
    </table>
  </div>
</html>
`,
    });
    return info;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
