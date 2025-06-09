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
// Hoán đổi vị trí
let swap = function (arrInput, indA, indB) {
    let tempoNum = arrInput[indA - 1];
    arrInput.splice(indA - 1, 1, arrInput[indB - 1]);
    arrInput.splice(indB - 1, 1, tempoNum);

    return arrInput;
}
// DOM
document.querySelector('#btnBai6').onclick = function () {
    let viTri1 = +document.querySelector('#viTri1').value;
    let viTri2 = +document.querySelector('#viTri2').value;

    let ketQua6 = swap(arrDauVao, viTri1, viTri2);

    document.getElementById('ketQua6').innerHTML = `Chuỗi mới sau khi hoán đổi: <strong>[${ketQua6}]</strong>`
}

// -------------------------------- Bài 7
// Sắp xếp tăng dần
let incrSort = function (arrInput) {
    let output = arrInput.sort(function (phanTu, phanTuTruoc) {
        if (phanTuTruoc > phanTu) {
            return -1;
        } else {
            return 1;
        }
    });
    return output;
}
// DOM
document.querySelector('#btnBai7').onclick = function () {
    let ketQua7 = incrSort(arrDauVao);

    document.getElementById('ketQua7').innerHTML = ketQua7;
}

// -------------------------------- Bài 8
// Tìm số nguyên tố đầu tiên
let find1stPrimeNumber = function (arrInput) {
    let numCheck, primeNum;
    let count = 0;

    for (let index in arrInput) {
        if (arrInput[index] > 1) {
            numCheck = arrInput[index];

            for (j = 2; j <= numCheck; j++) {

                if (numCheck % j == 0) {
                    count++;
                }
            };
            if (count == 1) {
                primeNum = numCheck;
                break;
            } else {
                count = 0;
            }
        }

    }
    return primeNum;
}
// DOM
document.querySelector('#btnBai8').onclick = function () {
    let ketQua8 = find1stPrimeNumber(arrDauVao);

    document.getElementById('ketQua8').innerHTML = `<strong>${ketQua8}</strong> là số nguyên tố đầu tiên trong chuỗi.`
}

// -------------------------------- Bài 9
// Đếm số nguyên
let countInt = function (arrInput) {
    let count = 0;
    let arrOutput = [];

    for (let i in arrInput) {
        if (Number.isInteger(arrInput[i]) == true) {
            count++;
            arrOutput.push(arrInput[i]);
        }
    }
    return [count, arrOutput];
}
// DOM
document.querySelector('#btnBai9').onclick = function () {
    let [ketQua9, arrMoi] = countInt(arrDauVao);

    document.getElementById('ketQua9').innerHTML = `Chuỗi có <strong>${ketQua9}</strong> số nguyên. Chuỗi các số nguyên là <strong>[${arrMoi}]</strong>`;
}


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