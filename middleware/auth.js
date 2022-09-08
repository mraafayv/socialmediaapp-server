import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;

// import { OAuth2Client } from 'google-auth-library';


// const clienId = "125194561426-jguvtt4m53uufddki6gpn0m6dpr5k2g1.apps.googleusercontent.com";
// const client = new OAuth2Client(clienId);
// async function auth() {
//   const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: clientId,  // Specify the CLIENT_ID of the app that accesses the backend
//       // Or, if multiple clients access the backend:
//       //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   });
//   const payload = ticket.getPayload();
//   const userid = payload['sub'];
//   // If request specified a G Suite domain:
//   // const domain = payload['hd'];
// }
// auth().catch(console.error);


// export default auth;