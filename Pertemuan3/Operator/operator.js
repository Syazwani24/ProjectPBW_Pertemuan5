//<!--Operator aritmatika-->

//<!--Pertambahan-->
let pertambahan= 10 + 10 
console.log(pertambahan) //20

//pengurangan/
let pengurangan = 10 - 10 
console.log(pengurangan) //0

//Perkalian/
let perkalian = 10 * 10 
console.log(pengurangan) //100

//pembagian/
let pembagian = 10 / 10 
console.log(pembagian) //1

//Modulus/
let modulus = 10 % 10 
console.log(modulus) //0

//Lebih Dari
let lebihDari = 10 > 10
console.log(lebihDari) // false

//kurang Dari
let kurangDari = 10 < 10
console.log(kurangDari) //false

// Lebi Dari Sama Dengan
let lebihDariSamaDengan = 10 <= 10 
console.log(lebihDariSamaDengan) //true

let kurangDariSamaDengan = 10 >= 10
console.log(kurangDariSamaDengan) // trues

let samaDengan = 10 == 10
console.log(samaDengan) //true

//Operator Logika//

//AND
let and = true && true
console.log(and) // true

//OR
let or = true || false
console.log(or) // true

//NOT 
let not = !true
console.log(not)// false

//string
let firstName, lastName, fullName;

firstName = "Shafna"; lastName = "Syazwani";
fullName = firstName +" "+ lastName; console.log(fullName);
console.log("Haloo my name is "+fullName);

let students = ["Dea Aulya", "Mutia", "Angel", "Step"];
console.log(students[0]+" dan "+students[2]+" merupakan teman dekat saya");

let exam = students[3] +" mendapatkan nilai " + 9*9; console.log(exam);

//operator spread//
let angka = [1,2,3,4,5]
let angka2 = [... angka, 6, 7, 8, 9, 10]
console.log(angka2) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
