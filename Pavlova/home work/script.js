var O = parseInt(prompt("Введите оклад, руб."));
var N = parseInt(prompt("Введите к-во дней в месяце."));
var M = parseInt(prompt("Введите к-во отработанных в месяц."));
var Z;
Z = O / N * M * 0.87;
console.log("Моя з/п в этом месяце " + Z + "руб.");


var X = prompt("Выберите язык для изучения: \n 1.Английский \n 2.Русский \n 3.Финнский");
        if (x == 1) {
            alert("Hello world!");
        }
        if (x == 2) {
            alert("Пpивет мир!");
        }
        if (x == 3) {
            alert("Hei maailma!");
        } else {
            alert("Error");
        }