var timer1;//タイマーを格納する変数

document.onkeydown = typeGame;　//キーを押したら関数typeGame()を呼び出す

//キーコードを格納する配列
var keycode = new Array(13, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90);

//グローバル変数
var correct_count = 0;    //正しく打てた文字数
var mistake_count = 0;    //間違えた文字数
var combo_count = 0;      //コンボ数(文字列を間違えず打ち切ると1、2と増加、間違えたら0に戻る)
var maxcombo_count = 0;   //最大コンボ数
var cnt = 0;              //文字のカウント
var cntmax = 0;           //文字列の文字数をカウントする
var mondai = '';


//カウントダウン関数を1000ミリ毎に呼び出す関数
/* eslint no-unused-vars: "off" */
function cntStart() {
    document.timer.elements[1].disabled = true;
    timer1 = setInterval("countDown()", 1000);
}

//タイマー停止関数
/* eslint no-unused-vars: "off" */
function cntStop() {
    document.timer.elements[1].disabled = false;
    clearInterval(timer1);
}

//カウントダウン関数
/* eslint no-unused-vars: "off" */
function countDown() {
    var sec = document.timer.elements[0].value;

    if (sec == "") {
        alert("時刻を設定してください！");
        reSet();
    }
    else {

        if (sec == "") sec = 0;
        sec = parseInt(sec);

        tmWrite(sec - 1);
    }
}

//残り時間を書き出す関数
/* eslint no-unused-vars: "off" */
function tmWrite(int) {
    int = parseInt(int);

    if (int <= 0) {
        reSet();
        alert("時間です！");
    }
    else {
        //残り秒数はintを60で割った余り
        document.timer.elements[0].value = int % 60;
        document.getElementById("timercount").innerHTML = document.timer.elements[0].value;
    }
}

//フォームを初期状態に戻す(リセット)関数
/* eslint no-unused-vars: "off" */
function reSet() {
    document.timer.elements[0].value = "0";
    document.timer.elements[1].disabled = false;
    clearInterval(timer1);
}

//タイピングゲームの問題をセットする関数
/* eslint no-unused-vars: "off" */
function gameSet()
{
    //文字列と文字数のカウントをクリアする
    mondai = "";
    cnt = 0;

    //問題文を呼び出す
    var a = Math.random() * 3;
    var n = Math.floor( a ) + 1;
    mondai = window.questions[n].character_string,
        cntmax = mondai.length;
    console.log(100);
    console.log(cntmax);
    console.log(mondai);

    //問題文を枠の中に入れる
    document.getElementById("waku").innerHTML = mondai;
    console.log(mondai);
}
//キー入力を受け取る関数
console.log(101);
console.log(mondai);
function typeGame(evt)
{
    var kc; //入力されたキーコードを格納する変数
    console.log(102);
    console.log(mondai);
    var elements = document.getElementsByTagName('*');
    console.log(elements);
    console.log(mondai);
    //入力されたキーのキーコードを取得
    if(elements)
    {
        kc = evt.keyCode;
        console.log(103);
        console.log(mondai);
    }
    else
    {
        kc = evt.which;
        console.log(104);
    }
    //入力されたキーコードと問題文のキーコードを比較
    console.log(kc);
    console.log(mondai.charCodeAt(cnt))
    if (kc == mondai.charCodeAt(cnt)) {
        console.log(105);
        //入力されたセルの文字色を灰色にする
        idName = mondai.substr(cnt,cnt+1);
        document.getElementById(idName).style.color = "#808080";
        cnt++; //文字列を1つ進める
    }
    else {
        //入力されたセルの文字色を赤にしdName = mondai.substr(cnt,cnt+1);var idName = mondai[cnt];
        console.log(106);
        console.log(mondai);
        var idName = "waku";
        console.log(mondai.substr(cnt,cnt+1));
        console.log(idName);
        console.log(cnt);
        console.log(document.getElementById(idName));
        document.getElementById(idName).style.color = "#FF0000";
    }

    //全文字入力したか確認、入力していたら次の写真と文字列を呼び出す
    if (cnt < cntmax)
    {
        console.log(107);
        mondai = mondai.substring(1,mondai.Length);
    }
    else
    {
        console.log(108);
        var a = Math.random() * 3;
        var n = Math.floor( a ) + 1;
        $("#title_img").attr("src", window.questions[n].image_path);
        var newText = window.questions[n].character_string;
        $("#string").text(newText);
    }

    //残り時間が0になったらゲーム画面にGAME OVERの文字を出力する
    if (document.timer.elements[0].value == 0)
    {
        console.log(109);
        var fin="TIME OVER";
        document.getElementById("waku").innerHTML = fin;
    }
}
;
