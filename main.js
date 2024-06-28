// Task-17
// Rəqəmlərin cəmini göstərən proqram yazın.
// İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və
// sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.

// let num = +prompt("4 reqemli ede daxil edin");
// let sum = (num % 10) + (num % 100) + (num % 1000) + (num % 10000);
// console.log(sum);!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Task-18
// İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.
// Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
// konsola «Salam, <ad>!» mesajını çıxarır.

// let name = prompt("Adinizi daxil edin")
// console.log(`Salam <${name}>!`);

// Task-19
// Qiyməti mətn halına salan proqram tərtib edin.
// İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və
// qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.

// let amount = +prompt("Mebleg daxil edin, Meselen(530.90)");
// let text = amount.toString();
// let spaceDot = text.indexOf(".");
// console.log(
//   amount.slice[(0, spaceDot)] +
//     " manat " +
//     amount.slice[spaceDot + 1] +
//     " qepik"
// );!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Task-20
// Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
// Proqram istifadəçidən əmək haqqı məbləğin soruşur və
// 13% vergi istisna olmaqla məbləği konsola çıxarır.

// let salary = +prompt("Maasi daxil et");
// let sub = salary - (salary * 13) / 100;
// console.log(sub);

// Task-21
// İstifadəçidən soyad, ad və ata adını istəyən,
// soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
// Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».

// let fullName = prompt("Soyad, Ad, Ata Adi daxil edin");
// let firstIndex = fullName.indexOf(" ");
// let lastIndex = fullName.lastIndexOf(" ");
// let surname = fullName.slice[(0, firstIndex)];
// let nameLetter = fullName.slice[(firstIndex + 1, lastIndex - 1)];
// let fatherLetter = fullName.slice[lastIndex + 1];
// console.log(`"${surname} + ${nameLetter} + ${fatherLetter}"`);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Task-22
// Depozitdən mənfəətin hesablanması üçün proqram yazın.
// Proqram istifadəçidən əmanətin məbləğini, müddətini və
// faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır.

// Task-23
// Müxtəlif müqayisə operatorları ilə 5 ifadə yazın.
// value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın,
// hansıki əməliyyat nəticəsi value = 10 üçün true və value = 20 üçün false olacaq.

// let value = 20;
// let a = value < 15;
// let b = value <= 19;
// let c = 12 >= value;
// let d = 10 >= value;
// let e = value <= 10;
// console.log(a, b, c, d, e);

// Task-24
// İstifadəçidən yaşını soruşun.
// Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın.
// Əks halda «Access granted» bildirişini çıxarın.

// let age = +prompt("Yasinizi daxil edin");
// if (age < 18) {
//   alert("Access Denied");
// } else {
//   alert("Access granted");
// }

// Task-25
// Üç ədədin ortancılını tapmaq üçün proqram yazın.
// İstifadəçidən bir bildirişlə üç ikirəqəmli ədəd daxil etməsini xahiş edin.
// Konsola orta ədədi, yəni nə ən böyüyü, nə də ən kiçiyini çıxarmayın.
// İstifadəçi bir neçə eyni nömrə daxil edibsə, xəta bildirişi çıxarın.
// "45 46 47"
// "47 46 45"
// "46 45 47"
// "46 47 45"

// Task-26
// İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.
// Uzun il 4-ə qalıqsız bölünən ildir.
// Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.
// «İl uzun il deyil» və ya «İl uzun ildir»mesajını çıxarın.

// let year = +prompt("ili daxil edin");
// if (year % 4 === 0){
//     console.log("il uzun ildir");
// }
// else{
//     console.log("il uzun il deyil");
// }
