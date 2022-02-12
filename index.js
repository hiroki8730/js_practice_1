"use strict"

// onclickでアラートを出す
const helloWorld = function () {
    window.alert("Hello World!");
    document.getElementById("hoge").textContent = "Hello!"
    const hoge = document.getElementById("hoge");
    window.alert(hoge.textContent);   
    if(textData.value) {
        textData = textData.value.split(",");
        window.alert(textData.value);
    }
    
    textData.map((el)=>document.body.appendChild(document.createElement("p")).textContent = el);
}

// リロードし終えたところでアラートを出す
window.onload = function () {
    setTimeout(()=>window.alert("DOMが構成された"), 1000);
}

// getElementsByTagNameを使ってindex.htmlのpタグの数を表示
const tagGetFunc = function () {
    const pNum = document.getElementsByTagName("p");
    window.alert(pNum.length);
}

// 入力されたテキストを定数textDataとし、helloWorldが呼び出された際に表示
let textData = document.getElementById("data");


let count = 0;
let timer;
const timerNode = document.getElementById("timer");

// タイマーの停止、何秒経ったのか表示
const stopCount = function () {
    clearInterval(timer);
    window.alert(count + "[s]");
}

// setintervalでcount変数を毎秒+1する
// 画面に表示されるpタグのIDが入った定数timerNode=経過した秒数とする
// if文でcountが5以上になった場合stopCount関数が走る
window.onload = function () {
    timer = setInterval(()=>{
        count++;
        timerNode.textContent = count;
        if(count >= 5){
            stopCount();
        }
    }, 1000);
}


// p要素を作成する
// p要素のtextContentを指定
// generate関数をつくる。bodyタグの子要素にpを
// ボタンを何回押してもpタグが生成されるのは一回
// コンソールには何度もfooと表示されるので、ボタンを押す度generate関数は走ってる
const p = document.createElement("p");
p.textContent = "新しく追加したノードです";
const generate = function () {
    document.body.appendChild(p);
    console.log("foo");
}

// リロードした時に画像のサイズをアラートで表示
// ソースを指定して画像を設定
// appendChildでbodyの中に
const img = document.createElement("img");
img.onload = function () {
    window.alert("画像の横幅は" + img.width + "\n" + "画像の縦幅は" + img.height);
}
img.src = "http://www.lovelive-anime.jp/otonokizaka/img/member/member09_04.png";
document.body.appendChild(img);

const jumpURL = function () {
    window.open('https://qiita.com/masayasviel/items/433875e2bc78f9b28567');
}