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

document.writeln("++++++++++++++++++++++++<br>")
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
document.writeln( Math.round((Math.random()*4+1))+"<br>");







