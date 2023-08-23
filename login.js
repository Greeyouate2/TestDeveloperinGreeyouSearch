// ログインフォームとログインボタンの要素を取得
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");

// ログイン機能のロジックを定義
function login() {
  // 入力されたユーザー名とパスワードを取得
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // 固定のユーザー名とパスワードを用意
  const validUsername = "admin";
  const validPassword = "1234adminj";

  // 入力された値と固定の値を比較
  if (username === validUsername && password === validPassword) {
    // ログイン成功のメッセージを表示
    alert("ログイン成功!");
  } else {
    // ログイン失敗のメッセージを表示
    alert("ログイン失敗!");
  }
}

// ログインボタンがクリックされたときに、ログイン関数を呼び出す
loginButton.addEventListener("click", login);
