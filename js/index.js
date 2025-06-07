// Input đầu vào
let arrDauVao = [];

document.querySelector('#themSo').onsubmit = function (event) {
    event.preventDefault();

    let them = +document.querySelector('#themVaoChuoi').value;
    arrDauVao.push(them);
    console.log(arrDauVao);

    document.querySelector('#chuoiDauVao').innerHTML = arrDauVao;
    document.querySelector('#themVaoChuoi').value = "";
}

// Reset
document.querySelector('#themSo').onreset = function () {
    arrDauVao = [];
    document.querySelector('#chuoiDauVao').innerHTML = arrDauVao;
}

// -------------------------------- Bài 1
// Tính tổng số dương
let sumPositive = function (arrInput) {
    let sum = 0;
    for (value of arrInput) {
        if (value > 0) {
            sum += value;
        }
    }
    return sum;
}
// DOM
document.querySelector('#btnBai1').onclick = function () {
    let tong = sumPositive(arrDauVao);

    document.getElementById('ketQua1').innerHTML = `Tổng số dương trong chuỗi: <strong>${tong}</strong>.`;
}

// -------------------------------- Bài 2
// Đếm số dương
let countPositive = function (arrInput) {
    let count = 0;
    for (i in arrInput) {
        if (arrInput[i] > 0) {
            count += 1;
        }
    }
    return count;
}
// DOM
document.querySelector('#btnBai2').onclick = function () {
    let dem = countPositive(arrDauVao);
    document.getElementById('ketQua2').innerHTML = `Trong chuỗi có <strong>${dem}</strong> số dương.`;
}

// -------------------------------- Bài 3
// Tìm số nhỏ nhất
let minOfArr = function (arrInput) {
    let min = arrInput[0];
    for (i in arrInput) {
        if (arrInput[i] < min) {
            min = arrInput[i];
        }
    }
    return min;
}
// DOM
document.querySelector('#btnBai3').onclick = function () {
    let timMin = minOfArr(arrDauVao);
    document.getElementById('ketQua3').innerHTML = `<strong>${timMin}</strong> là số nhỏ nhất.`;
}

// -------------------------------- Bài 4
// Tìm số dương nhỏ nhất
let minOfPositive = function (arrInput) {
    let minPos = arrInput[0];

    for (let index in arrInput) {
        if (arrInput[index] > 0) {
            if (arrInput[index] < minPos) {
                minPos = arrInput[index];
            }
        }
    }
    return minPos;
}
// DOM
document.querySelector('#btnBai4').onclick = function () {
    let timDuongMin = minOfPositive(arrDauVao);
    document.getElementById('ketQua4').innerHTML = `<strong>${timDuongMin}</strong> là số dương nhỏ nhất.`;
}
// -------------------------------- Bài 5
// Tìm số chẵn cuối cùng
let findLastPositive = function (arrInput) {
    let lastPositive = arrInput[0];
    for (let index in arrInput) {
        if (arrInput[index] % 2 == 0) {
            lastPositive = arrInput[index];
        }
    }
    return lastPositive;
}
// DOM
document.querySelector('#btnBai5').onclick = function () {
    let timChanCuoi = findLastPositive(arrDauVao);
    document.getElementById('ketQua5').innerHTML = `<strong>${timChanCuoi}</strong> là số chẵn cuối cùng.`
}


// -------------------------------- Bài 6
// Bài 7
// -------------------------------- Bài 8
// Tìm số nguyên tố đầu tiên
let find1stPrimeNumber = function (arrInput) {
    let numCheck, primeNum;

    for (let index in arrInput) {
        if (arrInput[index] > 1) {
            numCheck = arrInput[index];

            for (j = 2; j < numCheck; j++) {
                if (numCheck % j != 0) {
                    primeNum = numCheck;
                    break;
                }
            }
        }
    }
    return primeNum;
}
console.log(find1stPrimeNumber([1, 2, 4, 3, 5, 13, 16, 15]));

// -------------------------------- Bài 9
// 



// -------------------------------- Bài 10
// Đếm số âm (Đếm số dương của bài 1)
let countNegative = function (arrInput) {
    let count = 0;
    for (i in arrInput) {
        if (arrInput[i] < 0) {
            count += 1;
        }
    }
    return count;
}
// DOM
document.querySelector('#btnBai10').onclick = function () {
    let demDuong = countPositive(arrDauVao);
    let demAm = countNegative(arrDauVao);
    let soSanh = '';

    if (demDuong > demAm) {
        soSanh = 'nhiều hơn';
    } else if (demDuong < demAm) {
        soSanh = 'ít hơn';
    } else {
        soSanh = 'bằng'
    };

    document.getElementById('ketQua10').innerHTML = `Chuỗi có số Dương <strong>${soSanh}</strong> Số âm.`
}