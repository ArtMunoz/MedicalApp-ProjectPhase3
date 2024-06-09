const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(express.json());

app.post('/setCustomClaims', async (req, res) => {
  const { uid, role } = req.body;

  try {
    await admin.auth().setCustomUserClaims(uid, { role });
    res.status(200).send('Custom claims set successfully');
  } catch (error) {
    console.error('Error setting custom claims:', error);
    res.status(500).send('Error setting custom claims');
  }
});

app.post('/sendNotification', async (req, res) => {
  const { token, message } = req.body;

  const payload = {
    notification: {
      title: 'Recordatorio de Cita Médica',
      body: message,
    },
    token: token,
  };

  try {
    const response = await admin.messaging().send(payload);
    res.status(200).send('Notification sent successfully');
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send('Error sending notification');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
