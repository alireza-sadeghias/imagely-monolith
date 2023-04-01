import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
let cloud = document.createElement("div");
let config = {
    spiralResolution: 1,
    spiralLimit: 360 * 5,
    lineHeight: "0.8",
    xWordPadding: 0,
    yWordPadding: 3,
    font: "sans-serif",
};
var wordsDown = [];
/* =======================  PLACEMENT FUNCTIONS =======================  */
function createWordObject(word, freq) {
    var wordContainer = document.createElement("div");
    wordContainer.style.position = "absolute";
    wordContainer.style.fontSize = freq + "px";
    wordContainer.style.lineHeight = config.lineHeight;
    wordContainer.appendChild(document.createTextNode(word));
    return wordContainer;
}
function placeWord(word, x, y) {
    cloud.appendChild(word);
    word.style.left = x - word.offsetWidth / 2 + "px";
    word.style.top = y - word.offsetHeight / 2 + "px";
    wordsDown.push(word.getBoundingClientRect());
}
function intersect(word, x, y) {
    cloud.appendChild(word);
    word.style.left = x - word.offsetWidth / 2 + "px";
    word.style.top = y - word.offsetHeight / 2 + "px";
    const currentWord = word.getBoundingClientRect();
    cloud.removeChild(word);
    let hasIntersect = false;
    for (let comparisonWord of wordsDown) {
        // const comparisonWord = wordsDown[i];
        if (!(currentWord.right + config.xWordPadding <
            comparisonWord.left - config.xWordPadding ||
            currentWord.left - config.xWordPadding >
                comparisonWord.right + config.xWordPadding ||
            currentWord.bottom + config.yWordPadding <
                comparisonWord.top - config.yWordPadding ||
            currentWord.top - config.yWordPadding >
                comparisonWord.bottom + config.yWordPadding)) {
            hasIntersect = true;
            break;
        }
    }
    return hasIntersect;
}
function spiral(i, callback) {
    let angle = config.spiralResolution * i;
    let x = (1 + angle) * Math.cos(angle);
    let y = (1 + angle) * Math.sin(angle);
    const newLocal = callback ? callback(x, y) : null;
    console.log("85", newLocal, x, y);
    return newLocal;
}
function placeWords(words, startPoint) {
    for (let i = 0; i < words.length; i++) {
        const word = createWordObject(words[i].word, words[i].frequency);
        console.log("90", word);
        for (var j = 0; j < config.spiralLimit; j++) {
            //If the spiral function returns true, we've placed the word down and can break from the j loop
            if (spiral(j, function (x, y) {
                if (!intersect(word, startPoint.x + x, startPoint.y + y)) {
                    placeWord(word, startPoint.x + x, startPoint.y + y);
                    return true;
                }
                else {
                    return false;
                }
            })) {
                break;
            }
        }
    }
}
function setupCloudConfig() {
    let words = [
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
        };
    });
    words.sort(function (a, b) {
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
    let { words, startPoint, } = setupCloudConfig();
    placeWords(words, startPoint);
    console.log("158", cloud);
    return (_jsxs(_Fragment, { children: [console.log("161", cloud), _jsx("div", { className: "w-full h-full bg-red-300", dangerouslySetInnerHTML: { __html: cloud.innerHTML } })] }));
}
