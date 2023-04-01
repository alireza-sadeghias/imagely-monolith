import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const config = {
    trace: true,
    spiralLimit: 360 * 5,
    lineHeight: "0.6",
    xWordPadding: 1,
    yWordPadding: 1,
    font: "sans-serif",
};
const wordsDown = [];
function prepareIWords(words) {
    return words.map(function (word) {
        return {
            word: word,
            freq: Math.floor(Math.random() * 50) + 10,
        };
    });
}
function createWordObject(word, freq) {
    const wordContainer = document.createElement("div");
    wordContainer.style.position = "absolute";
    wordContainer.style.fontSize = freq + "px";
    wordContainer.style.lineHeight = config.lineHeight;
    wordContainer.appendChild(document.createTextNode(word));
    return wordContainer;
}
function placeWord(cloud, word, x, y) {
    cloud.appendChild(word);
    word.style.left = x - word.offsetWidth / 2 + "px";
    word.style.top = y - word.offsetHeight / 2 + "px";
    wordsDown.push(word.getBoundingClientRect());
}
function spiral(i, callback) {
    let angle = i;
    let x = (1 + angle) * Math.cos(angle);
    let y = (1 + angle) * Math.sin(angle);
    return callback ? callback(x, y) : null;
}
function intersect(cloud, word, x, y) {
    cloud.appendChild(word);
    word.style.left = x - word.offsetWidth / 2 + "px";
    word.style.top = y - word.offsetHeight / 2 + "px";
    const currentWord = word.getBoundingClientRect();
    cloud.removeChild(word);
    for (let i = 0; i < wordsDown.length; i += 1) {
        const comparisonWord = wordsDown[i];
        if (!(currentWord.right + config.xWordPadding <
            comparisonWord.left - config.xWordPadding ||
            currentWord.left - config.xWordPadding >
                comparisonWord.right + config.xWordPadding ||
            currentWord.bottom + config.yWordPadding <
                comparisonWord.top - config.yWordPadding ||
            currentWord.top - config.yWordPadding >
                comparisonWord.bottom + config.yWordPadding)) {
            return true;
        }
    }
    return false;
}
function prepareWords(cloud, word, startPoint) {
    return function (x, y) {
        if (!intersect(cloud, word, startPoint.x + x, startPoint.y + y)) {
            placeWord(cloud, word, startPoint.x + x, startPoint.y + y);
            return true;
        }
        else {
            return false;
        }
    };
}
function prepare(words, cloud, startPoint) {
    return function () {
        for (let i = 0; i < words.length; i += 1) {
            const word = createWordObject(words[i].word, words[i].freq);
            for (let j = 0; j < config.spiralLimit; j++) {
                //If the spiral function returns true, we've placed the word down and can break from the j loop
                if (spiral(j, prepareWords(cloud, word, startPoint))) {
                    break;
                }
            }
        }
    };
}
export default function WordCloud(props) {
    const { wordCloud = [] } = props;
    const [cloud, setCloud] = useState(document.createElement("div"));
    const [startPoint, setStartPoint] = useState({
        x: cloud.offsetWidth / 2,
        y: cloud.offsetHeight / 2,
    });
    const [words, setWords] = useState(prepareIWords(wordCloud));
    useEffect(() => {
        cloud.style.position = "relative";
        cloud.style.fontFamily = config.font;
        words.sort(function (a, b) {
            return -1 * (a.freq - b.freq);
        });
        prepare(words, cloud, startPoint)();
    }, []);
    const inputRef = useRef(cloud);
    return (_jsx("div", { className: "relative flex w-48 h-48 mx-8", ref: inputRef, children: "cloud not working" }));
}
