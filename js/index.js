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

// Bài 1
document.querySelector('#btnBai1').onclick = function () {
    let tong = sumPositive(arrDauVao);

    document.getElementById('ketQua1').innerHTML = `Tổng số dương trong chuỗi: <strong>${tong}</strong>.`
}


// Bài 2
// Bài 3
// Bài 4
// Bài 5
// Bài 6
// Bài 7
// Bài 8
// Bài 9
// Bài 10