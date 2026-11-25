let count = 0;

const countDisplay = document.getElementById("count");
const clickButton = document.getElementById("clickButton");
const result = document.getElementById("result");

clickButton.addEventListener("click", function() {

    // クリック回数を1増やす
    count++;

    // クリック回数を表示
    countDisplay.textContent = count;

    // 結果を空にする
    result.innerHTML = "";

    // switch構文で条件分岐
    switch (count) {

        // 1回目
        case 1:

            for (let i = 0; i < 1; i++) {
                result.innerHTML += "★";
            }

            break;

        // 2回目
        case 2:

            for (let i = 0; i < 5; i++) {
                result.innerHTML += "★";
            }

            break;

        // 3回目
        case 3:

            for (let i = 1; i <= 5; i++) {
                result.innerHTML += i + " ";
            }

            break;

        // 4回目
        case 4:

            for (let i = 2; i <= 10; i += 2) {
                result.innerHTML += i + " ";
            }

            break;

        // 5回目
        case 5:

            let total = 0;

            for (let i = 1; i <= count; i++) {
                total += i;
            }

            result.innerHTML = total;

            break;

        // 6回目以降
        default:

            result.innerHTML =
                "クリアしました。カウントを0に戻します。";

            count = 0;

            countDisplay.textContent = count;

            break;
    }

});