const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Отдаём всё из папки public (в том числе index.html)
app.use(express.static('public'));

// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Пример заглушки для POST-запроса (если хочешь заранее)
app.post('/pay', (req, res) => {
  res.status(200).json({ message: 'Платёжная система скоро будет подключена.' });
});

app.listen(port, () => {
  console.log(`🔌 Сервер оплаты NG Store запущен на http://localhost:${port}`);
});
