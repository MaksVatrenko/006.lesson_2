//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

function createSum() {
    let summ = 0;

    return function (x) {
        summ += x;
        return summ;
    };
}

const total = createSum();

alert(total(3));
alert(total(5));
alert(total(228));