const roulette2Data = {
  アビドス高等学校: [
    "アヤネ",
    "シロコ",
    "シロコ*テラー",
    "セリカ",
    "ノノミ",
    "ホシノ",
    "ユメ",
  ],
  ゲヘナ学園: [
    "アカリ",
    "アコ",
    "アル",
    "イオリ",
    "イブキ",
    "イズミ",
    "イロハ",
    "エリカ",
    "カスミ",
    "カヨコ",
    "キララ",
    "サツキ",
    "ジュリ",
    "ジュンコ",
    "セナ",
    "チアキ",
    "ハルカ",
    "ハルナ",
    "ヒナ",
    "フウカ",
    "マコト",
    "ムツキ",
    "メグ",
  ],
  トリニティ総合学園: [
    "アイリ",
    "アズサ",
    "イチカ",
    "ウイ",
    "カズサ",
    "コハル",
    "サクラコ",
    "シミコ",
    "スズミ",
    "セイア",
    "セリナ",
    "ツルギ",
    "ナギサ",
    "ナツ",
    "ハスミ",
    "ハナエ",
    "ハナコ",
    "ヒナタ",
    "ヒフミ",
    "マシロ",
    "マリー",
    "ミカ",
    "ミネ",
    "ヨシミ",
    "ラブ",
    "レイサ",
  ],
  ミレニアムサイエンススクール: [
    "アカネ",
    "アスナ",
    "アリス",
    "エイミ",
    "カリン",
    "コタマ",
    "コトリ",
    "コユキ",
    "スミレ",
    "チヒロ",
    "トキ",
    "ネル",
    "ノア",
    "ハレ",
    "ヒビキ",
    "ヒマリ",
    "マキ",
    "ミドリ",
    "ミライ",
    "モモイ",
    "ユウカ",
    "ユズ",
    "リオ",
    "レイ",
    "ウタハ",
  ],
  "ヴァルキューレ／SRT": [
    "オトギ",
    "カンナ",
    "キリノ",
    "クルミ",
    "コノカ",
    "サキ",
    "ニコ",
    "フブキ",
    "ミヤコ",
    "ミユ",
    "モエ",
    "ユキノ",
  ],
  百鬼夜行連合学院: [
    "アザミ",
    "アヤメ",
    "アラタ",
    "イズナ",
    "ウミカ",
    "カエデ",
    "カホ",
    "キキョウ",
    "クズノハ",
    "コクリコ",
    "シズコ",
    "シュロ",
    "チセ",
    "ツクヨ",
    "ツバキ",
    "ナグサ",
    "ニヤ",
    "フィーナ",
    "ミチル",
    "ミモリ",
    "ユカリ",
    "レンゲ",
    "ワカモ",
  ],
  山海経高級中学校: [
    "カグヤ",
    "キサキ",
    "ココナ",
    "サヤ",
    "シュン",
    "ミナ",
    "ルミ",
    "レイジョ",
  ],
  レッドウィンター連邦学園: [
    "シグレ",
    "タカネ",
    "チェリノ",
    "トモエ",
    "ノドカ",
    "マリナ",
    "ミノリ",
    "メル",
    "モミジ",
    "ヤクモ",
  ],
  アリウス分校: ["アツコ", "サオリ", "スバル", "ヒヨリ", "マイア", "ミサキ"],
  ハイランダー鉄道学園: ["アオバ", "スオウ", "ノゾミ", "ヒカリ"],
  "ワイルドハント／クロノス": [
    "エリ",
    "カノエ",
    "シノン",
    "ツムギ",
    "フユ",
    "ヒロミ",
    "マイ",
    "ミヨ",
    "リツ",
    "レナ",
  ],
  "連邦生徒会／その他": [
    "アキラ",
    "アオイ",
    "アケミ",
    "アロナ",
    "アユム",
    "カイ",
    "カイテンジャー",
    "カヤ",
    "スモモ",
    "ソラ",
    "ニヤニヤ教授",
    "ハイネ",
    "プラナ",
    "モモカ",
    "リン",
    "連邦生徒会長",
  ],
};

const vividColors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FF8000",
  "#80FF00",
  "#0080FF",
  "#FF3399",
  "#33FFCC",
  "#CC00FF",
];

let rotation1 = 0;
let rotation2 = 0;
let selectedSchool = "";

// 音声要素の取得
const drumRoll = document.getElementById("drumRoll");
drumRoll.volume = 0.6;
const timpaniRoll = document.getElementById("timpaniRoll");
const finishRoll = document.getElementById("finishRoll");

window.onload = () => {
  createWheel("wheel1", Object.keys(roulette2Data));
};

function createWheel(wheelId, dataList) {
  const wheel = document.getElementById(wheelId);
  wheel.innerHTML = "";
  const segmentAngle = 360 / dataList.length;
  let conicGradients = [];

  dataList.forEach((text, i) => {
    const color = vividColors[i % vividColors.length];
    conicGradients.push(
      `${color} ${i * segmentAngle}deg ${(i + 1) * segmentAngle}deg`
    );

    const labelDiv = document.createElement("div");
    labelDiv.className = "label";
    labelDiv.style.transform = `rotate(${
      i * segmentAngle + segmentAngle / 2
    }deg)`;

    // 指定のフォントサイズとオフセット
    const fontSize = dataList.length > 20 ? "10px" : "12px";
    const offset = dataList.length > 20 ? "-110px" : "-130px";

    labelDiv.innerHTML = `<span style="font-size:${fontSize}; transform: translateY(${offset});">${text}</span>`;
    wheel.appendChild(labelDiv);
  });
  wheel.style.background = `conic-gradient(${conicGradients.join(", ")})`;
}

// ルーレット①：学園抽選
document.getElementById("spin-button1").addEventListener("click", function () {
  this.disabled = true;
  const res = document.getElementById("result1");
  const sec2 = document.getElementById("roulette2-section");
  res.innerText = "抽選中...";
  sec2.style.display = "none";
  sec2.style.opacity = "0";

  drumRoll.currentTime = 0;
  drumRoll.play();

  const totalSpin = 3600 + Math.floor(Math.random() * 360);
  rotation1 += totalSpin;
  const wheel1 = document.getElementById("wheel1");
  wheel1.style.transform = `rotate(${rotation1}deg)`;

  setTimeout(() => {
    this.disabled = false;
    drumRoll.pause();
    finishRoll.currentTime = 0;
    finishRoll.play();

    const schools = Object.keys(roulette2Data);
    const actualDegree = rotation1 % 360;
    const index = Math.floor(
      ((360 - actualDegree) % 360) / (360 / schools.length)
    );
    selectedSchool = schools[index];
    res.innerText = `決定：${selectedSchool}`;

    createWheel("wheel2", roulette2Data[selectedSchool]);
    sec2.style.display = "flex";
    setTimeout(() => {
      sec2.style.opacity = "1";
    }, 100);
  }, 5000);
});

// ルーレット②：生徒抽選
document.getElementById("spin-button2").addEventListener("click", function () {
  this.disabled = true;
  const res = document.getElementById("result2");
  res.innerText = "抽選中...";

  timpaniRoll.currentTime = 0;
  timpaniRoll.play();

  const dataList = roulette2Data[selectedSchool];
  const totalSpin = 3600 + Math.floor(Math.random() * 360);
  rotation2 += totalSpin;
  const wheel2 = document.getElementById("wheel2");
  wheel2.style.transform = `rotate(${rotation2}deg)`;

  setTimeout(() => {
    this.disabled = false;
    timpaniRoll.pause();
    finishRoll.currentTime = 0;
    finishRoll.play();

    const actualDegree = rotation2 % 360;
    const index = Math.floor(
      ((360 - actualDegree) % 360) / (360 / dataList.length)
    );
    res.innerText = `当選：${dataList[index]}`;
  }, 5000);
});
