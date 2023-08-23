// セッションストレージからユーザー情報を取得
const user = JSON.parse(sessionStorage.getItem("user"));

// ログインボタンとサインアウトボタンの要素を取得
const loginButton = document.getElementById("login-button");
const signoutButton = document.getElementById("signout-button");

// ユーザー情報が存在するかどうかをチェック
if (user) {
  // ユーザー情報が存在する場合は、ログインされていると判断
  // サインアウトボタンを表示し、ログインボタンを非表示にする
  signoutButton.style.display = "block";
  loginButton.style.display = "none";
} else {
  // ユーザー情報が存在しない場合は、ログインされていないと判断
  // ログインボタンを表示し、サインアウトボタンを非表示にする
  loginButton.style.display = "block";
  signoutButton.style.display = "none";
}
