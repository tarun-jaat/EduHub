// const { authenticate } = require('@google-cloud/local-auth');
// const { google } = require('googleapis');
// const fs = require('fs').promises;
// const path = require('path');

// const TOKEN_PATH = path.join(process.cwd(), 'token.json');
// const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

// async function main() {
//   try {
//     const auth = await authenticate({
//       keyfilePath: CREDENTIALS_PATH,
//       scopes: ['https://www.googleapis.com/auth/drive.metadata.readonly']
//     });

//     listGoogleForms(auth);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// async function listGoogleForms(auth) {
//   const drive = google.drive({ version: 'v3', auth });
//   try {
//     const res = await drive.files.list({
//       q: "mimeType='application/vnd.google-apps.form'",
//       fields: 'files(id, name)',
//     });
    
//     const forms = res.data.files;
//     if (forms.length) {
//       console.log('Google Forms IDs:');
//       forms.forEach((form) => {
//         console.log(${form.name}: ${form.id});
//       });
//     } else {
//       console.log('No Google Forms found.');
//     }
//   } catch (error) {
//     console.error('Error listing Google Forms:', error.message);
//   }
// }

// main();