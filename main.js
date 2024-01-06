const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0]

const persons = [new Person(3000, "Mary", "Smith", 18),
    new Person(4000, "Tigran", "Petrosian", 42),
    new Person(2000, "Peter", "Smith", 37),
    new Person(1000, "John", "Jackson", 27)];

printArray(arr);
bubbleSortComp(arr, (a,b) => a - b);
printArray(arr);

printArray(persons);
bubbleSortComp(persons, (a,b) => a.age - b.age);
// вместо age можно по id или любому полю с типом number
printArray(persons);

function bubbleSortComp(arr,comparator) {
    let temp = 0;
    for (let i = 0; i < arr.length - 1 ; i++) {
        for (let j = 0; j < arr.length - 1 ; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

/*
хотел упростить, что бы можно было выбрать 3им параметром как сортировать,
но легче наверное прям там поменять a из b или b из a вычитать
function comparator(a, b, order) {
    if (order === 'up') {
        return a - b;
    } else if (order === 'down') {
        return b - a;
    } else {
        return -1;
    }
}
*/

function bubbleSort(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}

function bubbleSortByAge(persons) {
    let temp = 0;
    for (let i = 0; i < persons.length; i++) {
        for (let j = 0; j < persons.length; j++) {
            if (persons[j].age > persons[i].age) {
                temp = persons[j].age;
                persons[j].age = persons[i].age;
                persons[i].age = temp;
            }
        }
    }
}

// cкопировано с гпт:
function insertionSort(arr) {
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        var current = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// переделал для возраста
function insertionSortByAge(persons) {
    var n = persons.length;
    for (var i = 1; i < n; i++) {
        var current = persons[i].age;
        var j = i - 1;
        while (j >= 0 && persons[j].age > current) {
            persons[j + 1].age = persons[j].age;
            j--;
        }
        persons[j + 1].age = current;
    }
    return persons;
}

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log("=======================")
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}