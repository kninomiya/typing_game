/* eslint no-unused-vars: "off" */
// キーコードを格納する配列
var keycode = [
  13, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
  78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90
];

// グローバル変数
var correctCount = 0; // 正しく打てた文字数
var mistakeCount = 0; // 間違えた文字数
var comboCount = 0; // コンボ数(文字列を間違えず打ち切ると1、2と増加、間違えたら0に戻る)
var comboFlag = 0;// 0ならコンボ数＋1
var maxcomboCount = 0; // 最大コンボ数
var cnt = 0; // 文字のカウント
var cntmax = 0; // 文字列の文字数をカウントする
var mondai = ''; // 問題の文字列を格納する
var timer1 = null;// タイマーを格納する変数
var sec; // タイマーの秒設定
var log; // secを受け取る為のフラグ
var play; // ゲーム開始フラグ（エンターキーを押すまでは他のキーを打っても文字が出ないようにする ）
var newText; //
var mojiretsu;
document.onkeypress = typeGame; // キーを押したら関数typeGame()を呼び出す

function retry() {
  cnt = 0;
  log = 1;
  gameSet();
  correctCount = 0;
  mistakeCount = 0;
  comboCount = 0;
  comboFlag = 0;
  maxcomboCount = 0;
  $('#resultScore').html('');
  $('#resultCorrect').html('');
  $('#resultMistake').html('');
  $('#resultComboMax').html('');
  $('#resultRetry').css('display', 'none');
  $('#waku').html(mondai);
  timer1 = setInterval(() => {
    countDown();
  }, 1000);
  var messege = '';
  $('#string').html(messege);
  play = 1;
}

function openWelcomeGuide() {

    $('#welcome-guide-modal').modal('show');
}

$(function() {
    if(localStorage.getItem("last-access-date") == null) {
        localStorage.setItem("last-access-date", new Date());
        // welcomeメッセージを表示
        openWelcomeGuide();
    }
});

// カウンドダウン関数
/* eslint no-unused-vars: "off" */
function onKeyUpCountDown(e) {
  // timer1に値がセットされていたら何もしないで終了
    console.log(91);
  if (timer1 !== null) {
    return false;
  }

  if (e.which === 13) {
    log = 1;
    $('#waku').html(mondai);
    timer1 = setInterval(() => {
      countDown();
    }, 1000);
    var messege = '';
    $('#string').html(messege);
    play = 1;
    return true;
  }
  return false;
}

$(function () {
    console.log(90);
  $('html').keyup(function (e) {
    if (onKeyUpCountDown(e)) {
      console.log('countDown関数のタイマー設定をしました。');
    }
  });
});

// タイマー停止関数
/* eslint no-unused-vars: "off" */
function cntStop() {
  $('#start').attr('disabled',  false);
  clearInterval(timer1);
}

// カウントダウン関数(元々はhtmlの現在の時間読み込み)、秒設定
/* eslint no-unused-vars: "off" */
function countDown() {
// とりあえずここのsecで現在は秒数を設定
  if (log === 1) {
    sec = 15;
    play = 1;
    log = 0;
  }

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
  sec = mini;

  // 残り時間0かどうかの判定、0なら枠にゲームオーバーを表示、スコアを画面に表示
  if (int <= 0) {
    reSet();
    var fin = '';
    $('#string').html(fin);
    play = 0;
    log = 0;
    var messege = 'GAME OVER';
    $('#waku').html(messege);
    $('#timerCount').html('');
    var point;
    point = (correctCount - mistakeCount) * 50 + maxcomboCount * 500;
    $('#resultScore').html('得点:' + point);
    $('#resultCorrect').html('正打数:' + correctCount);
    $('#resultMistake').html('誤打数:' + mistakeCount);
    $('#resultComboMax').html('最大コンボ:' + maxcomboCount);
    $('#resultRetry').css('display', 'block');
  } else {
    /* eslint no-unused-vars: "off" */
    // 残り秒数はintを60で割った余り
    $('#timerCount').html(mini % 60);
  }
}

// フォームを初期状態に戻す(リセット)関数
/* eslint no-unused-vars: "off" */
function reSet() {
  clearInterval(timer1);
}

// タイピングゲームの問題をセットする関数
/* eslint no-unused-vars: "off" */
function gameSet() {
  mondai = '';
  cnt = 0;

  // 問題文を呼び出す
  var a = Math.random() * window.questions.length;
  var n = Math.floor(a);
  mondai = window.questions[n].character_string;
  cntmax = mondai.length;
  mojiretsu = mondai;
  $('#title_img').attr('src', window.questions[n].image_path);
  $('#waku').html('');
}

// キー入力を受け取る関数
/* eslint no-unused-vars: "off" */
  console.log(100);
function typeGame(evt) {
  console.log(101);
  var kc; // 入力されたキーコードを格納する変数
  var idName = 'waku';
  var elements = $('*');
  // 入力されたキーのキーコードを取得

      if (elements) {
          kc = evt.keyCode;
          console.log(102);
      } else {
          kc = evt.which;
          console.log(103);
      }
  console.log(play);
  // ゲーム開始後の処理、正しければその文字は灰色、間違えたらその文字は赤く塗る
  if (play === 1) {
    console.log(104);
    var character_strings = mojiretsu;
    console.log(mojiretsu.length);
    var a = mojiretsu.length;
    var b = (mojiretsu.length - mondai.length);
    var c = b + 1;
    var inputed_strings = character_strings.substring(0, b);
    var input_strings = character_strings.substring(b, b + 1);
    var not_inputed_strings = character_strings.substring(c, a);
    console.log(kc);
    console.log(mondai);
    console.log(mondai.charCodeAt(0));

    if (kc === mondai.charCodeAt(0)) {
      console.log(105);
      // 入力されたセルの文字色を灰色にする
      correctCount = correctCount + 1;
      cnt += 1; // 文字列を1つ進める
      $('#waku').empty();
      $('#waku').append("<span style='color: #808080'>" + inputed_strings + '</span>');
      $('#waku').append("<span style='color: #808080'>" + input_strings + '</span>');
      $('#waku').append("<span style='color: #000000'>" + not_inputed_strings + '</span>');
      mondai = mondai.substring(1, mondai.Length);
    } else {
      // 入力されたセルの文字色を赤にする（まだ出来てない）
      mistakeCount = mistakeCount + 1;
      comboCount = 0;
      comboFlag = 1;
      $('#waku').empty();
      $('#waku').append("<span style='color: #808080'>" + inputed_strings + '</span>');
      $('#waku').append("<span style='color: #FF8080'>" + input_strings + '</span>');
      $('#waku').append("<span style='color: #000000'>" + not_inputed_strings + '</span>');
    }

    // 全文字入力したか確認、入力していたら次の写真と文字列を呼び出す
    if (cnt === cntmax) {
      if (comboFlag === 0) {
        comboCount = comboCount + 1;
        if (comboCount >= maxcomboCount) {
          maxcomboCount = comboCount;
        }
      }
      comboFlag = 0;
      a = Math.random() * window.questions.length;
      var n = Math.floor(a);
      $('#title_img').attr('src', window.questions[n].image_path);
      newText = window.questions[n].character_string;
      $('#waku').text(newText);
      mojiretsu = newText;
      mondai = newText;
      cnt = 0;
      cntmax = mondai.length;
    }
  }
}
