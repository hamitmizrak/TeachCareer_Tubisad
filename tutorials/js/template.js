// Single Line Comment

/*
multiLine Comment
*/

//document: çalıştığımız sayfanın html-body taglerine erişmek
//window: her şeyin atası en üstteki önemli bir yapı

// alert("pop-up");
// window.alert("window alert");

// console.log("console.log")
// document.write("html yazdım"+"<br>")

// var obj={adi:"deneme"};
// console.log(obj)
// document.write(obj)

// ""   ==>   ' '  ==>   ` `
///////////////////////////////////////////////////////////////
//Variable
// var variable=44;
// document.write("<br>"+typeof variable);
// document.write("==>"+variable);

// variable=55.63;
// document.write("<br>"+typeof variable);
// document.write("==>"+variable);

// variable=false;
// document.write("<br>"+typeof variable);
// document.write("==>"+variable);

// variable="Merhabalar";
// document.write("<br>"+typeof variable);
// document.write("==>"+variable);

document.writeln('++++++++++++++++++++++++<br>')
// //variable rules English variable use
// var rules=55;
// var rulesProperty=55; //camel Case
// var rulesProperty9632=55;
// var $rulesProperty9632=55;
// var _rulesProperty9632=55;

//yazamazsın
//var 66rules=55;
//var &rules=55;
//var üğşçöĞŞÇÖ=55; //

///////////////////////////////////////////////////////////////
// =   ATAMA
// ==  EŞİT (Türe bakmıyor)  Examples => 4 == "4" (TRUE)
// === EŞİT (Tür bakıyor)    Examples => 4 ==="4" (FALSE)

//Operators
// 1-) Logic Operators        ==> &&=VE  ||=VEYA
// 2-) Mathematics Operators  ==> + - * ** / %
// 3-) Comparations Operators ==> > >= < <=  !  == ===
// 4-) increment deincrement  ==> x++ , ++x , y-- , --y

///////////////////////////////////////////////////////////////
//kullanıcıdan veri almak
//prompt ==> string olarak geliyor.
// var userData=prompt("lütfen bir kelime giriniz")
// document.write(userData);

///////////////////////////////////////////////////////////////
//CAST: dönüştür
//Number() ==> SAYI
//String() ==> KELIME
// var resutl="14",result2="26";
// document.write(resutl+result2+"<br>");
// document.write( Number(resutl)  + Number(result2) +"<br>");

// //////////////////////////////////////////////////////////////
// //Math: static
// document.write("PI: "+Math.PI+"<br>");
// document.write("E: "+Math.E+"<br>");
// document.write("sin: "+Math.sin(45)+"<br>");

// document.write("Max: "+Math.max([1,2,4])+"<br>");
// document.write("Min: "+Math.min(4,5,2,5,125)+"<br>");
// document.write("Mutlak: "+Math.abs(-44)+"<br>");
// document.write("Karekök: "+Math.sqrt(16)+"<br>");
// document.write("Mutlak-Karekök: "+Math.sqrt(Math.abs(16))+"<br>"); //monad
// document.write("üslü: "+Math.pow(2,5)+"<br>");

// document.write("Aşağı yuvarla: "+Math.floor(2.9)+"<br>");
// document.write("Yukarı yuvarla: "+Math.ceil(2.1)+"<br>");
// document.write("Aşağı/Yukarı yuvarla: "+Math.round(7.4)+"<br>");
// document.write("Aşağı/Yukarı yuvarla: "+Math.round(7.5)+"<br>");

// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

//////////////////////////////////////////////////////////////
//undefined:tanımsız
// var undefinedData;
// document.writeln(undefinedData+"<br>");

// //NaN=Not A Number
// var nanData=16/"asd";
// document.writeln(nanData+"<br>");

// //isNaN=is Not A Number  ==> false=SAYIDIR
// var is=16/4;
// document.writeln( isNaN(is)  +"<br>");

// //Infinity: Sonsuz
// var infinityData=5/0;
// document.writeln(infinityData+"<br>");

//new  ==> Hafıza yer açar (doğma)
//null ==> Hafızayı boşaltmak (ölüm)
//zero ==> Çarpma yutan, toplama etkisiz

//////////////////////////////////////////////////////////////
//Escape character
// document.writeln("\""+"<br>");
// document.writeln("' '"+"<br>");

//////////////////////////////////////////////////////////////
//Random
// document.writeln( Math.round((Math.random()*4+1))+"<br>");

//if else
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

//////////////////////////////////////////////////////////////
//SAYI
// var number1=44;
// var number2=44.66;

// //BILIMSEL
// var bilimsel=45E+3;
// document.write(bilimsel+"<br>")

// //CAST
// var number3= Number(prompt("Lütfen bir sayı giriniz"));
//  document.writeln(number3+15);

// //Sayı sistemler
// //2-8-16 => 10 tabana çevirme
// var binary=0b001101; //0-1 oluşur
// document.writeln(binary+"<br>")

// var octal=076; //01234567
// document.writeln(octal+"<br>")

// var hexadecimal=0xab; //0123456789abcdef
// document.writeln(hexadecimal+"<br>")

//////////////////////////////////////////////////////////////
//String
// var value="html5 css3 JAVASCRIPT Bootstrap responsive design css3 ";
// document.writeln(value+"<br>");

// document.writeln(value.length+"<br>");
// document.writeln(value.trim().length+"<br>");

// document.writeln(value.toUpperCase()+"<br>");
// document.writeln(value.toLowerCase()+"<br>");

// document.writeln(value.concat("-son44")+"<br>");

// document.writeln(value.startsWith("h")+"<br>");
// document.writeln(value.endsWith(" ")+"<br>");

// document.writeln(value.substring(1)+"<br>");
// document.writeln(value.substring(0,5)+"<br>"); //0<=X<= 5-1

// document.writeln(value.indexOf("css3")+"<br>");
// document.writeln(value.lastIndexOf("css3")+"<br>");
// document.writeln(value.charAt(0)+"<br>");

// document.writeln(value.replace(value,"Merhabalar")+"<br>");

/////////////////////////////////////////////////////////////////////////////////////
//String
// var object={
//     "adi":"Hamit",
//     "soyadi":"Mızrak"
// };

// var static=JSON.stringify(object);
// document.writeln(static+"<br>");

// //1-)statik kodlaması
// //substring
// var nameNumber=static.indexOf("Hamit");
// document.writeln(static.substring(nameNumber,nameNumber+5) +"<br>")

// var surnameNumber=static.indexOf("Mızrak");
// document.writeln(static.substring(surnameNumber,surnameNumber+6) +"<br>")

// document.writeln("++++++++++++++++++++++"+"<br>")

// //2-)dinamik kodlaması
// var dynamic=JSON.stringify(object);
// var parse=JSON.parse(dynamic);

// var name=parse.adi;
// document.writeln(name+"<br>")

// var surname=parse.soyadi;
// document.writeln(surname+"<br>")

// document.writeln("++++++++++++++++++++++"+"<br>")

// //3-)dinamik kodlaması
// document.writeln(JSON.parse(JSON.stringify(object)).adi+" "+JSON.parse(JSON.stringify(object)).soyadi);

/////////////////////////////////////////////////////////////////////////////////////

// function retursuzParametresiz() {
//   document.writeln('<br>' + 'retursuz parametresiz function')
// }
// retursuzParametresiz()

// function retursuzParametreli(param) {
//   document.writeln('<br>' + 'retursuz parametreli  function ' + param)
// }
// retursuzParametreli('argüman')

// function returluParametresiz() {
//   return 'returlu parametresiz function'
// }
// var result3 = returluParametresiz()
// document.writeln('<br>' + result3)

// function returluParametreli(data) {
//   var res = data * data
//   return res
// }
// var result4 = returluParametreli(4)
// document.writeln('<br>' + result4 + '<br>')

// ///////////////////////////////////////////////////////

// LOOP
// //iterative
// for (var i = 1; i <= 10; i++) {
//   document.write(i + ' ')
// }

// document.writeln('<br>' + '********************</br>')

// //while
// var x = 1
// while (x <= 10) {
//   document.write(x + ' ')
//   x++
// }

//Kullanıcıdan aldığımız verinin ilk harfi ve son harfi görünsün geriye kalan karakter kadar * olsun ==> Alınan örneğin Hamit  ==>  H***t
//function
//string ==> replace,sub,String,charAt()
//loop

///////////////////////////////////////////////////////
//normal function
function normal() {
  document.write('<br>' + 'normal function')
}
//normal()

//anonymous function (ES5)
var value = function () {
  document.write('<br>' + 'anonymous function')
}
//value()

//arrow function (ES6)
var value2 = () => {
  document.write('<br>' + 'arrow function')
}
//value2()

//Imedia Function
//()()

//Multi Thread  ==> JAVA
//Single Thread ==> JAVASCRIPT

//setTimeout
//setTimeout(body,timer)
// 1000 ms =1 s
//setTimeout(normal,3000)

//callback function
//promise

///////////////////////////////////////////////
//try catch
// try {
//     alert44("Deneme")
// } catch (err) {
//     document.write("<br>"+err.message)
//     document.write("<br>"+err.name)
// }finally{
//     document.write("<br>"+"db.closed socket.close");
// }
//throw "veri"

///////////////////////////////////////////////
//conditional
function conditional() {
  var number = 7

  //if else
  //   if (number > 10) {
  //     document.write('<br>' + 'büyüktür')
  //   } else {
  //     document.write('<br>' + 'küçüktür')
  //   }

  // //ternary (if else)
  // var resultData=(number > 10) ?'büyüktür' :'küçüktür';
  // document.write('<br>' + resultData)

  //if else if else
  if (number == 1) {
    document.write('<br>' + '1')
  } else if (number == 2) {
    document.write('<br>' + '2')
  } else if (number == 3) {
    document.write('<br>' + '3')
  } else if (number == 4) {
    document.write('<br>' + '4')
  } else if (number == 5) {
    document.write('<br>' + '5')
  } else if (number == 6) {
    document.write('<br>' + '6')
  } else if (number == 7) {
    document.write('<br>' + '7')
  } else {
    document.write('<br>' + 'farklı sayı')
  }

  //switch-case
  switch (number) {
    case 1:
      document.write('<br>' + '1')
      break
    case 2:
      document.write('<br>' + '2')
      break
    case 3:
      document.write('<br>' + '3')
      break
    case 4:
      document.write('<br>' + '4')
      break
    case 5:
      document.write('<br>' + '5')
      break
    case 6:
      document.write('<br>' + '6')
    case 7:
      document.write('<br>' + '7')
      break

    default:
      document.write('<br>' + 'farklı sayı')
      break
  }

  //return    ==> metot çalışmasına izin vermiyor
  //break     ==> döngüyü çalışmasına izin vermiyor
  //continue  ==> sadece 1 seferliğine çalışmasın sonra devam etsin
}
//conditional()

//kullanıcı tarafından sayı girelim (prompt)
//1<=X<=sayı
//eğer sayı 44 secretKey ise toplama yapmadan çıksın (break)
//eğer sayı 1 veya negatifse kullanıcıyı uyrarsın (break)?
//eğer toplanacak sayılarda 7 varsa toplamaya dahil edilmesin (continue)
//Bu sayıların toplamını yapan program yapalım


function numberUser() {
  var val =10; //Number(prompt('Lütfen bir sayı giriniz'))

  //hoisting
  sum = 0; //toplama 0(sıfır etkisizdir)
  var sum;

  for (let i = 1; i <= val; i++) {
    if (val == 44) {
      alert('44 secretKey çıkış yapıldı')
      break
    }
    
    if (i == 7) {
      alert('7 toplanmıyacak')
      continue
    }
    sum += i
  }
  document.writeln('<br>' + sum)
}

numberUser()
