// サインアップフォームとサインアップボタン、サインアウトボタンの要素を取得
const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-button");
const signoutButton = document.getElementById("signout-button");

// サーバーのURLを用意
const serverUrl = "https://gsearch-search.github.io/text/uwu.txt";

// サインアップ機能のロジックを定義
function signup() {
  // 入力された値を取得
  const username = signupForm.username.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const confirmPassword = signupForm["confirm-password"].value;

  // 入力された値を検証
  if (password !== confirmPassword) {
    // パスワードとパスワードの確認が一致しない場合
    alert("パスワードとパスワードの確認が一致しません。");
    return;
  }

  if (!validateEmail(email)) {
    // メールアドレスが有効な形式でない場合
    alert("メールアドレスが有効な形式ではありません。");
    return;
  }

  // サーバーに送信するデータを作成
  const data = {
    username: username,
    email: email,
    password: password
  };

  // サーバーに送信
  fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // 送信が成功した場合
        // ログイン状態にするために、セッションストレージにユーザー情報を保存
        sessionStorage.setItem("user", JSON.stringify(data.user));
        // サインアウトボタンを表示し、サインアップフォームを非表示にする
        signoutButton.style.display = "block";
        signupForm.style.display = "none";
        // サインアップ成功のメッセージを表示
        alert("サインアップ成功!");
      } else {
        // 送信が失敗した場合
        // エラーメッセージを表示
        alert(data.message);
      }
    })
    .catch((error) => {
      // 通信エラーが発生した場合
      // エラーメッセージを表示
      alert(error.message);
    });
}

// サインアウト機能のロジックを定義
function signout() {
  // セッションストレージからユーザー情報を削除し、ログアウト状態にする
  sessionStorage.removeItem("user");
  // サインアウトボタンを非表示にし、サインアップフォームを表示する
  signoutButton.style.display = "none";
  signupForm.style.display = "block";
  // サインアウト成功のメッセージを表示
  alert("サインアウト成功!");
}

// メールアドレスの形式を検証する関数
function validateEmail(email) {
  // メールアドレスの正規表現パターンを用意
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // メールアドレスが正規表現パターンにマッチするかどうかを返す
  return emailPattern.test(email);
}

// サインアップボタンがクリックされたときに、サインアップ関数を呼び出す
signupButton.addEventListener("click", signup);

// サインアウトボタンがクリックされたときに、サインアウト関数を呼び出す
signoutButton.addEventListener("click", signout);
