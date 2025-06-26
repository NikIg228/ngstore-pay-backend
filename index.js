const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('NG Store Payment Backend is live 🚀');
});

app.post('/api/pay', (req, res) => {
  // Заглушка для оплаты — можно подключить платёжный API
  console.log('Payment request:', req.body);
  res.json({ success: true, message: 'Payment processed (stub)' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});