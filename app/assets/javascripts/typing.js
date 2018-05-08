// キーコードを格納する配列
const keycode = [
  13, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
  78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90
];

// グローバル変数
var correctCount = 0; // 正しく打てた文字数
var mistakeCount = 0; // 間違えた文字数
var comboCount = 0; // コンボ数(文字列を間違えず打ち切ると1、2と増加、間違えたら0に戻る)
var maxcomboCount = 0; // 最大コンボ数
var cnt = 0; // 文字のカウント
var cntmax = 0; // 文字列の文字数をカウントする
var mondai = '';
var timer1;// タイマーを格納する変数
document.onkeypress = typeGame; // キーを押したら関数typeGame()を呼び出す

// カウントダウン関数を1000ミリ毎に呼び出す関数
/* eslint no-unused-vars: "off" */
function cntStart() {
  //document.timer.elements[1].disabled = true;
  $("#start").attr("disabled",  true);
  //  timer1 = setInterval('countDown()', 1000);
  timer1 = setInterval(() => {
    countDown();
  }, 1000);
}

// タイマー停止関数
/* eslint no-unused-vars: "off" */
function cntStop() {
  //document.timer.elements[1].disabled = false;
  $("#start").attr("disabled",  false);
  clearInterval(timer1);
}

// カウントダウン関数
/* eslint no-unused-vars: "off" */
function countDown() {
  //var sec = document.timer.elements[0].value;
  var sec = $("#leftSeconds").val();
  console.log(11);
  console.log(sec);
  if (sec === '') {
    alert('時刻を設定してください！');
    reSet();
  } else {
    if (sec === '') sec = 0;
    sec = parseInt(sec, 10);

    tmWrite(sec - 1);
  }
}

// 残り時間を書き出す関数
/* eslint no-unused-vars: "off" */
function tmWrite(int) {
  var mini;
  mini = parseInt(int, 10);
  console.log(mini);

  if (int <= 0) {
    reSet();
    alert('時間です！');
  } else {
    // 残り秒数はintを60で割った余り
    $("#leftSeconds").attr("value",  mini % 60);
    console.log(mini % 60);
    $("#timerCount").html(mini % 60);

    //document.timer.elements[0].value = mini % 60;
    //document.getElementById('timercount').innerHTML = document.timer.elements[0].value;
    //$("#timercount").html(("#leftSeconds").attr("value",  mini % 60));
  }
}

// フォームを初期状態に戻す(リセット)関数
/* eslint no-unused-vars: "off" */
function reSet() {
  //document.timer.elements[0].value = '0';
  var leftseconds = $("#leftseconds").attr("value",  0);
  console.log(leftseconds);
  //document.timer.elements[1].disabled = false;
  $("#start").attr("disabled",  false);
  clearInterval(timer1);
}

// タイピングゲームの問題をセットする関数
/* eslint no-unused-vars: "off" */
function gameSet() {
  // 文字列と文字数のカウントをクリアする
  mondai = '';
  cnt = 0;

  // 問題文を呼び出す
  var a = Math.random() * 3;
  var n = Math.floor(a) + 1;
  mondai = window.questions[n].character_string;
  cntmax = mondai.length;
  console.log(100);
  console.log(cntmax);
  console.log(mondai);

  // 問題文を枠の中に入れる
  $("#waku").html(mondai);
  console.log(mondai);
}
// キー入力を受け取る関数
console.log(101);
console.log(mondai);
function typeGame(evt) {
  var kc; // 入力されたキーコードを格納する変数
  var idName = 'waku';
  console.log(102);
  console.log(mondai);
  //var elements = document.getElementsByTagName('*');
  var elements = $('*');
  console.log(elements);
  console.log(mondai);
  // 入力されたキーのキーコードを取得
  if (elements) {
    kc = evt.keyCode;
    console.log(evt.keyCode);
    console.log(103);
    console.log(kc);
    console.log(mondai);
  } else {
    kc = evt.which;
    console.log(104);
  }
  // 入力されたキーコードと問題文のキーコードを比較
  console.log(1001);
  console.log(cnt);
  console.log(kc);
  console.log(mondai.charCodeAt(0));
  if (kc === mondai.charCodeAt(0)) {
    console.log(105);
    // 入力されたセルの文字色を灰色にする
    idName = mondai.slice(0, 1);
    console.log(cnt);
    console.log(idName);
    console.log(mondai.slice(0, 1));
    $("#" + idName).css("color", "#808080");
    cnt += 1; // 文字列を1つ進める
    mondai = mondai.substring(1, mondai.Length);
  } else {
    // 入力されたセルの文字色を赤にする（まだ出来てない）
    console.log(106);
    console.log(mondai);
    console.log(mondai.slice(0, 1));
    console.log(idName);
    console.log(cnt);
    console.log($("#idName"));
    $("#" + idName).css("color", "#FF0000");
  }

  // 全文字入力したか確認、入力していたら次の写真と文字列を呼び出す
    console.log(cntmax);
  if (cnt < cntmax) {
    console.log(107);
    console.log(mondai);
  } else {
    console.log(108);
    const a = Math.random() * 3;
    const n = Math.floor(a) + 1;
    $('#title_img').attr('src', window.questions[n].image_path);
    const newText = window.questions[n].character_string;
    $('#string').text(newText);
    $('#waku').text(newText);
    console.log(newText);
    mondai = newText;
    console.log(mondai);
    cnt = 0;
    cntmax = mondai.length;
  }

  // 残り時間が0になったらゲーム画面にGAME OVERの文字を出力する
  //if (document.timer.elements[0].value === 0) {
    if ($("#leftSeconds").attr("value") === 0) {
    console.log(109);
    const fin = 'TIME OVER';
    $("#waku").html(fin);
  }
}
