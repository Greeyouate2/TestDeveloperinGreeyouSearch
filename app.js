const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ダミーのユーザーデータベース
const users = [];

// サインアップエンドポイント
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // 既にユーザーが存在するかチェック
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    res.status(400).json({ message: 'すでに存在するユーザー名です' });
    return;
  }

  // ユーザーを保存
  users.push({ username, password });
  res.json({ message: '新規登録成功' });
});

app.listen(port, () => {
  console.log(`サーバーがポート ${port} で起動しました。`);
});
