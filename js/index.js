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
// Tìm số dương nhỏ nhất
let minOfPositive = function (arrInput) {
    // let arrPos = [];
    let minPos = 1;

    for (value of arrInput) {
        if (value > 0) {
            if (value < minPos) {
                minPos = value;
            } 
        } 
        // console.log(arrPos);
    }
    return minPos;

}

// Đổi vị trí
// Sắp xếp tăng dần 
// Tìm số nguyên tố đầu tiên
// Đếm số nguyên
// So sánh số lượng số âm và dương

// Bài 1
document.querySelector('#btnBai1').onclick = function () {
    let tong = sumPositive(arrDauVao);

    document.getElementById('ketQua1').innerHTML = `Tổng số dương trong chuỗi: <strong>${tong}</strong>.`
}

// Bài 2
document.querySelector('#btnBai2').onclick = function () {
    let dem = countPositive(arrDauVao);
    document.getElementById('ketQua2').innerHTML = `Trong chuỗi có <strong>${dem}</strong> số dương.`
}

// Bài 3
// Bài 4
// Bài 5
// Bài 6
// Bài 7
// Bài 8
// Bài 9
// Bài 10