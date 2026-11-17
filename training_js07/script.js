
// Web2_7-1 挨拶
function greetings() {
    const today = new Date();
    const hour = today.getHours();

    if (hour >= 5 && hour < 9)
        return "おはようございます";
    else if (hour < 18)
        return "こんにちは";
    else
        return "こんばんは";
}

let greeting = greetings();

document.getElementById("greeting").textContent = greeting;
console.log("Web2_7-1 挨拶:", greeting);


// Web2_7-2 確認ダイアログ
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function startAsk() {
    ask(
        "次の操作を始めてもいい？",
        function() {
            document.getElementById("askResult").textContent = "移動する！";
            console.log("Web2_7-2:", "移動する！");
        },
        function() {
            document.getElementById("askResult").textContent = "このページに留まる";
            console.log("Web2_7-2:", "このページに留まる");
        }
    );
}

console.log("Web2_7-2 確認ダイアログ: 準備完了");


// Web2_7-3 電卓
function calculateResult(op1, op2, operator) {
    let result = 0;

    switch (operator) {
        case "+":
            result = op1 + op2;
            break;
        case "-":
            result = op1 - op2;
            break;
        case "*":
            result = op1 * op2;
            break;
        case "/":
            result = op1 / op2;
            break;
        default:
            throw new SyntaxError("演算子が正しくありません");
    }

    return result;
}

let calculatorResult =
    "10 + 5 = " + calculateResult(10, 5, "+") + "\n" +
    "10 - 5 = " + calculateResult(10, 5, "-") + "\n" +
    "10 × 5 = " + calculateResult(10, 5, "*") + "\n" +
    "10 ÷ 5 = " + calculateResult(10, 5, "/");

document.getElementById("calculator").innerText = calculatorResult;
console.log("Web2_7-3 電卓:\n" + calculatorResult);


// Web2_7-4 素数判定
const n = 100;

function isPrime(n) {
    if (n <= 3) {
        return n > 1;
    } else if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    let i = 5;

    while (i ** 2 <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }

        i += 6;
    }

    return true;
}

console.log("Web2_7-4 素数判定:");

for (let i = 2; i <= n; i++) {
    if (!isPrime(i)) continue;
    console.log(i);
}


// Web2_7-5 アロー関数
const sum = (a, b) => a + b;

const fibo = (n) =>
    n < 2 ? n : fibo(n - 1) + fibo(n - 2);

const betweenOrBound = (low, high, n) => {
    if (n >= low && n <= high)
        return n;
    else if (n < low)
        return low;
    else
        return high;
};

let sumResult = sum(10, 20);
let fiboResult = fibo(7);
let boundResult = betweenOrBound(10, 20, 25);

document.getElementById("sumResult").textContent =
    "sum: " + sumResult;

document.getElementById("fiboResult").textContent =
    "fibo: " + fiboResult;

document.getElementById("boundResult").textContent =
    "betweenOrBound: " + boundResult;

console.log("Web2_7-5 アロー関数:");
console.log("sum:", sumResult);
console.log("fibo:", fiboResult);
console.log("betweenOrBound:", boundResult);