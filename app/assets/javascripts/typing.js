// キーコードを格納する配列
const keycode = [
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
var mondai = '';　// 問題の文字列を格納する
var timer1;// タイマーを格納する変数
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
    $("#resultScore").html("");
    $("#resultCorrect").html("");
    $("#resultMistake").html("");
    $("#resultComboMax").html("");
    $("#resultRetry").css("display", "none");
    $("#waku").html(mondai);
    console.log(log);
    timer1 = setInterval(() => {
        countDown();
    }, 1000);
    var messege = '';
    $("#string").html(messege);
    play = 1;
}

function onKeyUpCountDown(e) {
    // timer1に値がセットされていたら何もしないで終了
    if (timer1 != null) {
        return false;
    }

    if(e.which === 13) {
        log = 1;
        $("#waku").html(mondai);
        console.log(log);
        timer1 = setInterval(() => {
            countDown();
        }, 1000);
        var messege = '';
        $("#string").html(messege);
        play = 1;
        return true;
    }
    return false;
}

$(function(){

    $('html').keyup(function(e) {
        if(onKeyUpCountDown(e)) {
            console.log("countDown関数のタイマー設定をしました。");
        }
    });
});

// タイマー停止関数
/* eslint no-unused-vars: "off" */
function cntStop() {
  //document.timer.elements[1].disabled = false;
  $("#start").attr("disabled",  false);
  clearInterval(timer1);
}

// カウントダウン関数(元々はhtmlの現在の時間読み込み)、秒設定
/* eslint no-unused-vars: "off" */
function countDown() {
  //var sec = document.timer.elements[0].value;
  console.log(40);
  console.log(sec);
  if(log === 1) {
      sec = 15;
      play = 1;
      console.log(50);
      console.log(log);
      log = 0;
  }
  // else {
  //     sec = $("#timerCount").val();
  //     console.log(51);
  // }

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
  sec = mini;
  console.log(mini);

// 残り時間0かどうかの判定、0なら枠にゲームオーバーを表示、スコアを画面に表示
  if (int <= 0) {
    reSet();
      var fin = '';
      $("#string").html(fin);
      play = 0;
      log = 0;
      var messege = 'GAME OVER';
      $("#waku").html(messege);
      $("#timerCount").html('');
      var point;
      point = (correctCount - mistakeCount) * 50 + maxcomboCount * 500;
      $("#resultScore").html("得点:" + point);
      $("#resultCorrect").html("正打数:" + correctCount);
      $("#resultMistake").html("誤打数:" + mistakeCount);
      $("#resultComboMax").html("最大コンボ:" + maxcomboCount);
      $("#resultRetry").css("display", "block");
      // $("#resultScore").html("SCORE" + correctCount);


  } else {
    // 残り秒数はintを60で割った余り
    // $("#leftSeconds").attr("value",  mini % 60);
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
  //var leftseconds = $("#leftseconds").attr("value",  0);
  //console.log(leftseconds);
  //document.timer.elements[1].disabled = false;
  //$("#start").attr("disabled",  false);
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
        mojiretsu = mondai;
        // 問題文を枠の中に入れる
        $("#title_img").attr("src", window.questions[n].image_path);
        $("#waku").html("");
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
        if (cnt === 0) {

        }

    if (play === 1) {
        console.log(301);
        console.log(mojiretsu);
        var character_strings = mojiretsu;
        var a = (mojiretsu.length - mondai.length);
        var b = a + 1;
        console.log(a);
        var input_strings = mondai;
        console.log(input_strings.length);
        var not_inputed_strings = character_strings.substring(0,b);
        console.log(character_strings);
        console.log(input_strings);
        console.log(not_inputed_strings);

        if (kc === mondai.charCodeAt(0)) {
            console.log(105);
            // 入力されたセルの文字色を灰色にする
            idName = mondai.slice(0, 1);
            correctCount = correctCount + 1;
            console.log(cnt);
            console.log(idName);
            console.log(mondai.slice(0, 1));
            //$("#" + idName).css("color", "#808080");
            cnt += 1; // 文字列を1つ進める
            $("#waku").append("<span style='color: #000000'>" + character_strings + "</span>");
            $("#waku").append("<span style='color: #808080'>" + not_inputed_strings + "</span>");
            mondai = mondai.substring(1, mondai.Length);
        } else {
            // 入力されたセルの文字色を赤にする（まだ出来てない）
            mistakeCount = mistakeCount + 1;
            comboCount = 0;
            comboFlag = 1;
            console.log(106);
            console.log(mondai);
            console.log(mondai.slice(0, 1));
            console.log(idName);
            console.log(cnt);
            console.log($("#idName"));
            // $("#" + idName).css("color", "#FF0000");
            $("#waku").text("<span style='color: #808080'>" + input_strings + "</span>");
            $("#waku").attr("<span style='color: #FF8080'>" + input_strings + "</span>");
            $("#waku").attr("<span style='color: #000000'>" + not_inputed_strings + "</span>");
        }

        // 全文字入力したか確認、入力していたら次の写真と文字列を呼び出す
        console.log(cntmax);
        if (cnt < cntmax) {
            console.log(107);
            console.log(mondai);
        }
        else {
            if (comboFlag === 0) {
                comboCount = comboCount + 1;
                console.log(201);
                if (comboCount >= maxcomboCount) {
                    console.log(202);
                    maxcomboCount = comboCount;
                }
            }
            comboFlag = 0;
            console.log(108);
            var a = Math.random() * 3;
            var n = Math.floor(a) + 1;
            $('#title_img').attr('src', window.questions[n].image_path);
            newText = window.questions[n].character_string;
            // $('#string').text(newText);
            $('#waku').text(newText);
            console.log(newText);
            mojiretsu = newText;
            mondai = newText;
            console.log(newText);
            console.log(mondai);
            cnt = 0;
            cntmax = mondai.length;
        }
    }
}
