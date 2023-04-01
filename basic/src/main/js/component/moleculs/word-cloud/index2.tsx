interface IWord {
  word: string;
  frequency: number;
}

interface IStartPoint {
  x: number;
  y: number;
}

let cloud: HTMLDivElement = document.createElement("div");

let config = {
  spiralResolution: 1, //Lower = better resolution
  spiralLimit: 360 * 5,
  lineHeight: "0.8",
  xWordPadding: 0,
  yWordPadding: 3,
  font: "sans-serif",
};

var wordsDown: DOMRect[] = [];

/* =======================  PLACEMENT FUNCTIONS =======================  */
function createWordObject(word: string, freq: number): HTMLDivElement {
  var wordContainer: HTMLDivElement = document.createElement("div");
  wordContainer.style.position = "absolute";
  wordContainer.style.fontSize = freq + "px";
  wordContainer.style.lineHeight = config.lineHeight;
  wordContainer.appendChild(document.createTextNode(word));

  return wordContainer;
}

function placeWord(word: HTMLDivElement, x: number, y: number): void {
  cloud.appendChild(word);
  word.style.left = x - word.offsetWidth / 2 + "px";
  word.style.top = y - word.offsetHeight / 2 + "px";

  wordsDown.push(word.getBoundingClientRect());
}

function intersect(word: HTMLDivElement, x: number, y: number): boolean {
  cloud.appendChild(word);

  word.style.left = x - word.offsetWidth / 2 + "px";
  word.style.top = y - word.offsetHeight / 2 + "px";

  const currentWord = word.getBoundingClientRect();

  cloud.removeChild(word);

  let hasIntersect: boolean = false;
  for (let comparisonWord of wordsDown) {
    // const comparisonWord = wordsDown[i];

    if (
      !(
        currentWord.right + config.xWordPadding <
          comparisonWord.left - config.xWordPadding ||
        currentWord.left - config.xWordPadding >
          comparisonWord.right + config.xWordPadding ||
        currentWord.bottom + config.yWordPadding <
          comparisonWord.top - config.yWordPadding ||
        currentWord.top - config.yWordPadding >
          comparisonWord.bottom + config.yWordPadding
      )
    ) {
      hasIntersect = true;
      break;
    }
  }

  return hasIntersect;
}

function spiral(
  i: number,
  callback: (x: number, y: number) => boolean
): boolean | null {
  let angle = config.spiralResolution * i;
  let x = (1 + angle) * Math.cos(angle);
  let y = (1 + angle) * Math.sin(angle);
  const newLocal = callback ? callback(x, y) : null;
  console.log("85", newLocal, x, y);
  return newLocal;
}

function placeWords(words: IWord[], startPoint: IStartPoint): void {
  for (let i = 0; i < words.length; i++) {
    const word = createWordObject(words[i].word, words[i].frequency);
    console.log("90", word);
    for (var j = 0; j < config.spiralLimit; j++) {
      //If the spiral function returns true, we've placed the word down and can break from the j loop
      if (
        spiral(j, function (x, y) {
          if (!intersect(word, startPoint.x + x, startPoint.y + y)) {
            placeWord(word, startPoint.x + x, startPoint.y + y);
            return true;
          } else {
            return false;
          }
        })
      ) {
        break;
      }
    }
  }
}

function setupCloudConfig() {
  let words: IWord[] = [
    "words",
    "are",
    "cool",
    "and",
    "so",
    "are",
    "you",
    "inconstituent",
    "funhouse!",
    "apart",
    "from",
    "Steve",
    "fish",
  ].map(function (word) {
    return {
      word: word,
      frequency: Math.floor(Math.random() * 50) + 10,
    } as unknown as IWord;
  });

  words.sort(function (a: IWord, b: IWord) {
    return -1 * (a.frequency - b.frequency);
  });

  cloud.style.position = "relative";
  cloud.style.fontFamily = config.font;

  var startPoint = {
    x: cloud.offsetWidth / 2,
    y: cloud.offsetHeight / 2,
  };
  return { words, startPoint };
}

export default function WordCloud() {
  /*  ======================= SETUP ======================= */

  let {
    words,
    startPoint,
  }: {
    words: IWord[];
    startPoint: { x: number; y: number };
  } = setupCloudConfig();

  placeWords(words, startPoint);

  console.log("158", cloud);
  return (
    <>
      {console.log("161", cloud)}
      <div
        className="w-full h-full bg-red-300"
        dangerouslySetInnerHTML={{ __html: cloud.innerHTML }}
      ></div>
    </>
  );
}
