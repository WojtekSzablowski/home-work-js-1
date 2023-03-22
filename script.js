//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
console.log("- ZADANIE 1a ---------------------------------------------------");

const bool = true;
const number = 22;
const text = "SUN";

console.log(bool + " - " + typeof bool);
console.log(number + " - " + typeof number);
console.log(text + " - " + typeof text);
console.log();

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
console.log("- ZADANIE 1b ---------------------------------------------------");
// 2 + "2"
console.log('2 + "2" = ' + (2 + "2"));
console.log(
  `"Number" + "String" zwróci nam "String", gdyż "+" traktowany jest jako operator łączenia łańcuchów.`
);
console.log();
// 2 + 2
console.log("2 + 2 = " + (2 + 2));
console.log(`"Number" + "Number" zwróci nam "Number".`);
console.log();
// 2 * "2"
console.log('2 * "2" = ' + 2 * "2");
console.log(`"Number" * "String" zwróci nam "Number".`);
console.log();
// 2 * 2
console.log("2 * 2 = " + 2 * 2);
console.log(`"Number" * "Number" zwróci nam "Number".`);
console.log();
// 1 == true
console.log("1 == true = " + (1 == true));
console.log(
  `"Number" == "Boolean" zwróci nam "Boolean". Porównanie bez uwzględnienia typów (1 jako true).`
);
console.log();
// 0 == false
console.log("0 == false = " + (0 == false));
console.log(`"Number" == "Boolean" zwróci nam "Boolean".`);
console.log();
// 0 == null
console.log("0 == null = " + (0 == null));
console.log(`"Number" == "null" zwróci nam "Boolean".`);
console.log();
// null == undefined
console.log("null == undefined = " + (null == undefined));
console.log(`"null" == "undefined" zwróci nam "Boolean".`);
console.log();
//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="
console.log(`" = " - operator przypisania wartości do zmiennej.`);
console.log(`" == " - operator porównania, bez uwzględnienia typów.`);
console.log(`" === " - operator porównania, z uwzględnieniem typów.`);
console.log();

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli
console.log("- ZADANIE 1c ---------------------------------------------------");
console.log(
  "Typ referencyjny przez adres komórki wskazuje na wartość, a typ prosty wskazuje bezpośrednio na wartość."
);
console.log(
  "Typy referncyjne: tablica, obiekt.\nTypy proste: string, number, boolean, null, undefined."
);
console.log();

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
console.log("- ZADANIE 1d ---------------------------------------------------");
// let val = 0 (przekonwertuj na typ Boolean)
let val = 0;
console.log(`0 przekonwertowane na typ Boolean to ${Boolean(val)}`);
// let num = "2137" (przekonwertuj na typ Number)
let num = "2137";
console.log(`"2137" przekonwertowany na typ Number to ${Number(num)}`);
// let str = 007 (przekonwertuj na String)
let str = 007;
console.log(`007 przekonwertowane na String to "${String(str)}"`);
// let und = undefined (przekonwertuj na Boolean)
let und = undefined;
console.log(`undefined przekonwertowane na Boolean to ${Boolean(und)}`);
console.log();

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli
console.log("- ZADANIE 1e ---------------------------------------------------");

const oneE = new Array();
oneE.push("ball", 3, true);

console.log(oneE);
console.log();

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli
console.log("- ZADANIE 1f ---------------------------------------------------");

const oneF = new Object();
oneF.name = "Batman";
oneF.age = 41;
oneF.car = true;

console.log(oneF);
console.log();

//g)* opisz krótko czym dokładnie jest typ NaN
console.log("- ZADANIE 1g ---------------------------------------------------");

console.log(
  " NaN (ang. Not A Number) jest to specjalna wartość, która reprezentuje wynik nie mający interpretacji liczbowej."
);
console.log();

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko
console.log("- ZADANIE 1h ---------------------------------------------------");

console.log(
  "Symbol to prymitywny typ danych, który zawsze zawiera unikalną wartość."
);
console.log();
//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb
console.log("- ZADANIE 2a ---------------------------------------------------");

const sumOfThreeNumbers = (num1, num2, num3) => num1 + num2 + num3;
console.log("Suma wprowadzonych trzech liczb: " + sumOfThreeNumbers(2, 7, 10));
console.log();

//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik
console.log("- ZADANIE 2b ---------------------------------------------------");

const trinagleArea = (height, base) => (1 / 2) * height * base;

console.log("Pole trójkąta wynosi: " + trinagleArea(8, 3));
console.log();

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację
console.log("- ZADANIE 2c ---------------------------------------------------");

const whenYouHad18thBirthday = (yourAge) => {
  if (yourAge < 18) {
    return "Jeszcze nie masz 18 lat ";
  } else {
    return `Mineło ${yourAge - 18} lat od twoich osiemnastych urodzin`;
  }
};
console.log(whenYouHad18thBirthday(21));
console.log();

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości
console.log("- ZADANIE 2d ---------------------------------------------------");

const arrayInformation = (arr) =>
  `Przekazana tablica ma ${arr.length} elementów, a elementem numer 3 jest ${arr[2]}.`;

console.log(arrayInformation([8, 2, 4, 9, 3, 6, 8, 9, 20]));
console.log();

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.
console.log("- ZADANIE 2e ---------------------------------------------------");
let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};

const objectPersonInformation = (person) =>
  `Pan/i ${person.name} ${person.surname} ma ${person.age} lat/a oraz ${person.height} cm wzrostu.`;
console.log(objectPersonInformation(testPerson));
console.log();

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.
console.log("- ZADANIE 2f ---------------------------------------------------");

const ChangePersonAge = (person, age) => `${(person.age = age)} lata`;

console.log(ChangePersonAge(testPerson, 23));
console.log();

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"
console.log("- ZADANIE 2g ---------------------------------------------------");

const showFizzBuzz = (number) => {
  if (typeof number !== "number") {
    return "Możesz dodać tylko liczbę";
  } else if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  }
};

console.log(showFizzBuzz("abc"));
console.log(showFizzBuzz(15));
console.log(showFizzBuzz(9));
console.log(showFizzBuzz(20));
console.log();

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego
console.log("- ZADANIE 2h ---------------------------------------------------");

const evenNumber = (number) => {
  return number % 2 === 0
    ? `${number} jest liczbą parzystą`
    : `${number} jest liczbą nieparzystą`;
};

console.log(evenNumber(24));
console.log(evenNumber(317));
console.log();

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10
console.log("- ZADANIE 2i ---------------------------------------------------");

const numbersDrawing = () => {
  return Math.floor(Math.random() * 10 + 1);
};

console.log("Wylosowana liczba: " + numbersDrawing());
console.log();

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu
console.log("- ZADANIE 2j ---------------------------------------------------");

const RandomNumberFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log("Wylosowana liczba:" + RandomNumberFromRange(12, 0));
console.log();

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.

//--------------------------
// 3. FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9
console.log("- ZADANIE 3a ---------------------------------------------------");

const loop1to9 = () => {
  for (i = 1; i < 10; i++) {
    console.log(i);
  }
};

loop1to9();
console.log();

//b) napisz pętlę która odliczy od 9 do 1
console.log("- ZADANIE 3b ---------------------------------------------------");

const loop9to1 = () => {
  for (i = 9; i > 0; i--) {
    console.log(i);
  }
};

loop9to1();
console.log();

//c) napisz pętlę która odliczy od 5 do 15
console.log("- ZADANIE 3c ---------------------------------------------------");

const loop5to15 = () => {
  for (i = 5; i < 16; i++) {
    console.log(i);
  }
};

loop5to15();
console.log();

//d) napisz pętlę która odliczy od 0 do -10
console.log("- ZADANIE 3d ---------------------------------------------------");

const loop0ToMinus10 = () => {
  for (i = 0; i >= -10; i--) {
    console.log(i);
  }
};

loop0ToMinus10();
console.log();

//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2
console.log("- ZADANIE 3e ---------------------------------------------------");

const loop1to20EveryTwo = () => {
  for (i = 1; i <= 20; i += 2) {
    console.log(i);
  }
};

loop1to20EveryTwo();
console.log();

//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
console.log("- ZADANIE 3f ---------------------------------------------------");

const loop10ToMinus10EveryFour = () => {
  for (i = 10; i >= -10; i -= 4) {
    console.log(i);
  }
};

loop10ToMinus10EveryFour();
console.log();

//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
console.log("- ZADANIE 3g ---------------------------------------------------");

const loop1to100EveryIterationGrowingTwice = () => {
  for (i = 1; i <= 100; i *= 2) {
    console.log(i);
  }
};

loop1to100EveryIterationGrowingTwice();
console.log();

//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
console.log("- ZADANIE 3h ---------------------------------------------------");

const loop1to10OddNumbers = () => {
  for (i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
};

loop1to10OddNumbers();
console.log();

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
console.log("- ZADANIE 3i ---------------------------------------------------");

const loop1to10AndEvenOrOddNumbers = () => {
  for (i = 1; i <= 10; i++) {
    i % 2 === 0
      ? console.log(`${i} jest liczbą parzystą`)
      : console.log(`${i} jest liczbą nieparzystą`);
  }
};

loop1to10AndEvenOrOddNumbers();
console.log();

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości
console.log("- ZADANIE 3j ---------------------------------------------------");

const loop1toGivenNumber = (number) => {
  for (i = 1; i <= number; i++) {
    console.log(i);
  }
};

loop1toGivenNumber(15);
console.log();

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)
console.log("- ZADANIE 3k ---------------------------------------------------");

const loop1to50IterationGivenNumber = (num) => {
  for (i = 1; i <= 50; i += num) {
    console.log(i);
  }
};

loop1to50IterationGivenNumber(10);
console.log();

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
console.log("- ZADANIE 3l ---------------------------------------------------");

const arrNames = [
  "Ksawery",
  "Zenobiusz",
  "Klementyna",
  "Apolonia",
  "Jeremiasz",
  "Bernadetta",
];

const welcome = (arr) => {
  for (item of arr) {
    console.log(`Cześć ${item}`);
  }
};

welcome(arrNames);
console.log();

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
console.log("- ZADANIE 3ł ---------------------------------------------------");

const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];

const presentCar = (arr) => {
  for (obj in arr) {
    console.log(`przed Tobą stoi ${arr[obj].color} ${arr[obj].brand}`);
  }
};
presentCar(arrObjects);
console.log();

//m) napisz funkcję która przyjmie tablicę arrNumbers i wyświetli w konsoli tylko parzyste elementy tablicy
console.log("- ZADANIE 3m ---------------------------------------------------");

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = (arr) => {
  for (index of arr) {
    if (index % 2 === 0) {
      console.log(index);
    }
  }
};

evenNumbers(arrayNumbers);
console.log();

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
console.log("- ZADANIE 3n ---------------------------------------------------");
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami

const arrTypes = [
  2,
  4,
  5,
  undefined,
  null,
  "val",
  NaN,
  7,
  10,
  333,
  "874",
  22,
  21,
  400,
  "400",
  "undefined",
];

const arrOther = [];
const arrNumbers = [];
const arrEven = [];

const returnObjectFromArray = () => {
  for (item of arrTypes) {
    if (typeof item !== "number") {
      arrOther.push(item);
    } else {
      arrNumbers.push(item);
    }
    if (typeof item === "number" && item % 2 === 0) {
      arrEven.push(item);
    }
  }
  return { arrOther, arrNumbers, arrEven };
};

console.log(returnObjectFromArray(arrTypes));
console.log();

//--------------------------
// 4. METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names
console.log("- ZADANIE 4a ---------------------------------------------------");

const names = ["Seba", "Kari", "Mati", "Andżi"];

const hello = names.map((item) => "Cześć " + item);

console.log(hello);
console.log();

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami
console.log("- ZADANIE 4b ---------------------------------------------------");

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumb = array10.filter((item) => item % 2 == 0);

console.log(evenNumb);
console.log();

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami
console.log("- ZADANIE 4c ---------------------------------------------------");

const people = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];

const onlyfemale = people.filter((person) => person.gender == "female");

console.log(onlyfemale);
console.log();

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.
console.log("- ZADANIE 4d ---------------------------------------------------");

const shopping =
  "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";

const shoppingList = shopping.toLowerCase().split(" ").sort();

console.log(shoppingList);
console.log();

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."
console.log("- ZADANIE 4e ---------------------------------------------------");

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const reverseArrayAndReturnString = alphabet.reverse().join("");

console.log(reverseArrayAndReturnString);
console.log();
